import { Injectable } from '@nestjs/common';
import { CrawlRequestDto } from './dto/crawl-request.dto';
import { ScrapeRequestDto } from './dto/scrape-request.dto';
import {
  CrawlError,
  CrawlPage,
  CrawlResponse,
  ScrapeFormat,
} from './types/scrape.types';
import {
  canonicalizeUrl,
  compileExcludePatterns,
  isSameDomain,
  normalizeInputUrl,
} from './url.utils';
import { ScraperService } from './scraper.service';

interface QueueItem {
  url: URL;
  depth: number;
}

interface ResolvedCrawlOptions {
  maxPages: number;
  maxDepth: number;
  timeoutMs: number;
  maxContentLength: number;
  maxLinks: number;
  excludePatterns: string[];
  sameDomain: boolean;
  includeSubdomains: boolean;
  ignoreQueryParams: boolean;
  onlyMainContent: boolean;
  includeContent: boolean;
  formats: ScrapeFormat[];
  renderJavaScript: boolean;
  waitForMs: number;
}

@Injectable()
export class CrawlerService {
  constructor(private readonly scraperService: ScraperService) {}

  async crawl(payload: CrawlRequestDto): Promise<CrawlResponse> {
    const seedUrl = normalizeInputUrl(payload.url);
    const startedAt = new Date().toISOString();
    const pages: CrawlPage[] = [];
    const errors: CrawlError[] = [];
    const queue: QueueItem[] = [{ url: seedUrl, depth: 0 }];
    const visited = new Set<string>();

    const options = this.resolveOptions(payload);
    const excludePatterns = compileExcludePatterns(options.excludePatterns);

    while (queue.length > 0 && pages.length < options.maxPages) {
      const current = queue.shift();
      if (!current) {
        break;
      }

      const canonicalCurrent = canonicalizeUrl(
        current.url,
        options.ignoreQueryParams,
      );

      if (visited.has(canonicalCurrent)) {
        continue;
      }

      if (this.isExcluded(canonicalCurrent, excludePatterns)) {
        visited.add(canonicalCurrent);
        continue;
      }

      visited.add(canonicalCurrent);

      try {
        const scrapePayload: ScrapeRequestDto = {
          url: current.url.toString(),
          timeoutMs: options.timeoutMs,
          maxContentLength: options.maxContentLength,
          maxLinks: options.maxLinks,
          onlyMainContent: options.onlyMainContent,
          formats: options.formats,
          renderJavaScript: options.renderJavaScript,
          waitForMs: options.waitForMs,
        };

        const scrapeResult = await this.scraperService.scrape(scrapePayload);
        const metadata = scrapeResult.data.metadata;
        const links = scrapeResult.data.links ?? [];

        pages.push({
          url: scrapeResult.data.finalUrl,
          depth: current.depth,
          statusCode: scrapeResult.data.statusCode,
          source: scrapeResult.data.source,
          title: metadata?.title ?? null,
          description: metadata?.description ?? null,
          linksDiscovered: links.length,
          content: options.includeContent ? scrapeResult.data.content : undefined,
        });

        if (current.depth >= options.maxDepth) {
          continue;
        }

        for (const link of links) {
          if (queue.length + pages.length >= options.maxPages * 6) {
            break;
          }

          let parsedLink: URL;
          try {
            parsedLink = normalizeInputUrl(link);
          } catch {
            continue;
          }

          if (
            options.sameDomain &&
            !isSameDomain(seedUrl, parsedLink, options.includeSubdomains)
          ) {
            continue;
          }

          const canonicalLink = canonicalizeUrl(
            parsedLink,
            options.ignoreQueryParams,
          );

          if (visited.has(canonicalLink)) {
            continue;
          }

          if (this.isExcluded(canonicalLink, excludePatterns)) {
            continue;
          }

          queue.push({ url: parsedLink, depth: current.depth + 1 });
        }
      } catch (error: unknown) {
        errors.push({
          url: current.url.toString(),
          depth: current.depth,
          message: error instanceof Error ? error.message : 'crawl failed',
        });
      }
    }

    const completedAt = new Date().toISOString();

    return {
      success: true,
      data: {
        startUrl: seedUrl.toString(),
        startedAt,
        completedAt,
        pages,
        errors,
        stats: {
          pagesVisited: pages.length + errors.length,
          pagesSucceeded: pages.length,
          pagesFailed: errors.length,
          queueRemaining: queue.length,
        },
      },
    };
  }

  private resolveOptions(payload: CrawlRequestDto): ResolvedCrawlOptions {
    const includeContent = payload.includeContent ?? false;

    let formats = payload.formats;
    if (!formats || formats.length === 0) {
      formats = [ScrapeFormat.Metadata, ScrapeFormat.Links];
      if (includeContent) {
        formats.push(ScrapeFormat.Markdown);
      }
    }

    return {
      maxPages: payload.maxPages ?? 25,
      maxDepth: payload.maxDepth ?? 2,
      timeoutMs: payload.timeoutMs ?? 15_000,
      maxContentLength: payload.maxContentLength ?? 1_000_000,
      maxLinks: payload.maxLinks ?? 120,
      excludePatterns: payload.excludePatterns ?? [],
      sameDomain: payload.sameDomain ?? true,
      includeSubdomains: payload.includeSubdomains ?? false,
      ignoreQueryParams: payload.ignoreQueryParams ?? true,
      onlyMainContent: payload.onlyMainContent ?? true,
      includeContent,
      formats,
      renderJavaScript: payload.renderJavaScript ?? false,
      waitForMs: payload.waitForMs ?? 300,
    };
  }

  private isExcluded(url: string, patterns: RegExp[]): boolean {
    return patterns.some((pattern) => pattern.test(url));
  }
}
