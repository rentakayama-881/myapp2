import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  Logger,
  RequestTimeoutException,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { ScrapeRequestDto } from './dto/scrape-request.dto';
import { parseHtmlDocument } from './parser';
import { RenderingService } from './rendering.service';
import {
  ScrapeContent,
  ScrapeFormat,
  ScrapeResponse,
} from './types/scrape.types';
import { normalizeInputUrl } from './url.utils';

interface ResolvedScrapeOptions {
  formats: ScrapeFormat[];
  timeoutMs: number;
  maxContentLength: number;
  maxLinks: number;
  onlyMainContent: boolean;
  renderJavaScript: boolean;
  waitForMs: number;
}

interface FetchHtmlResult {
  statusCode: number;
  finalUrl: string;
  html: string;
  source: 'http' | 'browser';
}

@Injectable()
export class ScraperService {
  private readonly logger = new Logger(ScraperService.name);
  private readonly strictBrowserMode =
    process.env.PLAYWRIGHT_STRICT_MODE === 'true';

  constructor(private readonly renderingService: RenderingService) {}

  async scrape(payload: ScrapeRequestDto): Promise<ScrapeResponse> {
    const targetUrl = normalizeInputUrl(payload.url);
    const options = this.resolveOptions(payload);
    const fetchResult = await this.fetchHtml(targetUrl.toString(), options);

    const parsed = parseHtmlDocument({
      html: fetchResult.html,
      url: fetchResult.finalUrl,
      onlyMainContent: options.onlyMainContent,
      maxLinks: options.maxLinks,
    });

    const content: ScrapeContent = {};
    if (options.formats.includes(ScrapeFormat.Markdown)) {
      content.markdown = parsed.markdown;
    }
    if (options.formats.includes(ScrapeFormat.Html)) {
      content.html = parsed.html;
    }
    if (options.formats.includes(ScrapeFormat.Text)) {
      content.text = parsed.text;
    }

    return {
      success: true,
      data: {
        url: targetUrl.toString(),
        finalUrl: fetchResult.finalUrl,
        fetchedAt: new Date().toISOString(),
        statusCode: fetchResult.statusCode,
        source: fetchResult.source,
        metadata: options.formats.includes(ScrapeFormat.Metadata)
          ? parsed.metadata
          : undefined,
        content,
        links: options.formats.includes(ScrapeFormat.Links)
          ? parsed.links
          : undefined,
        stats: parsed.stats,
      },
    };
  }

  private resolveOptions(payload: Partial<ScrapeRequestDto>): ResolvedScrapeOptions {
    const formats =
      payload.formats && payload.formats.length > 0
        ? payload.formats
        : [ScrapeFormat.Markdown, ScrapeFormat.Metadata, ScrapeFormat.Links];

    return {
      formats,
      timeoutMs: payload.timeoutMs ?? 15_000,
      maxContentLength: payload.maxContentLength ?? 1_000_000,
      maxLinks: payload.maxLinks ?? 120,
      onlyMainContent: payload.onlyMainContent ?? true,
      renderJavaScript:
        payload.renderJavaScript ??
        process.env.SCRAPER_DEFAULT_RENDER_JS === 'true',
      waitForMs: payload.waitForMs ?? 300,
    };
  }

  private async fetchHtml(
    targetUrl: string,
    options: ResolvedScrapeOptions,
  ): Promise<FetchHtmlResult> {
    if (options.renderJavaScript) {
      try {
        const browserResult = await this.renderingService.renderPage({
          url: targetUrl,
          timeoutMs: options.timeoutMs,
          waitForMs: options.waitForMs,
          maxContentLength: options.maxContentLength,
        });

        return {
          ...browserResult,
          source: 'browser',
        };
      } catch (error: unknown) {
        if (this.strictBrowserMode) {
          if (error instanceof Error) {
            throw new BadGatewayException(error.message);
          }
          throw new BadGatewayException('browser render failed');
        }

        this.logger.warn(
          `browser render failed for ${targetUrl}, falling back to http fetch`,
        );
      }
    }

    return this.fetchHtmlViaHttp(targetUrl, options);
  }

  private async fetchHtmlViaHttp(
    targetUrl: string,
    options: ResolvedScrapeOptions,
  ): Promise<FetchHtmlResult> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), options.timeoutMs);

    try {
      const response = await fetch(targetUrl, {
        redirect: 'follow',
        signal: controller.signal,
        headers: {
          Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.1',
          'User-Agent': 'myapp-scraper/1.1 (+https://myapp.local)',
        },
      });

      if (!response.ok) {
        throw new BadGatewayException(
          `fetch failed with status ${response.status}`,
        );
      }

      const contentType = response.headers.get('content-type') ?? '';
      if (
        !contentType.includes('text/html') &&
        !contentType.includes('application/xhtml+xml')
      ) {
        throw new UnsupportedMediaTypeException(
          `unsupported content type: ${contentType || 'unknown'}`,
        );
      }

      const html = await response.text();
      const byteLength = Buffer.byteLength(html, 'utf8');
      if (byteLength > options.maxContentLength) {
        throw new BadRequestException(
          `content too large (${byteLength} bytes), max ${options.maxContentLength}`,
        );
      }

      const finalUrl = response.url || targetUrl;

      return {
        statusCode: response.status,
        finalUrl,
        html,
        source: 'http',
      };
    } catch (error: unknown) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      if (error instanceof UnsupportedMediaTypeException) {
        throw error;
      }
      if (error instanceof BadGatewayException) {
        throw error;
      }

      if (error instanceof Error && error.name === 'AbortError') {
        throw new RequestTimeoutException(
          `fetch timeout after ${options.timeoutMs}ms`,
        );
      }

      this.logger.error(
        `failed to fetch url ${targetUrl}`,
        error instanceof Error ? error.stack : undefined,
      );
      throw new BadGatewayException('failed to fetch url');
    } finally {
      clearTimeout(timeout);
    }
  }
}
