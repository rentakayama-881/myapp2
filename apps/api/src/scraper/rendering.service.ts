import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  Logger,
  OnModuleDestroy,
  RequestTimeoutException,
} from '@nestjs/common';
import { Browser, chromium } from 'playwright';

interface RenderPageOptions {
  url: string;
  timeoutMs: number;
  waitForMs: number;
  maxContentLength: number;
}

interface RenderPageResult {
  statusCode: number;
  finalUrl: string;
  html: string;
}

@Injectable()
export class RenderingService implements OnModuleDestroy {
  private readonly logger = new Logger(RenderingService.name);
  private readonly enabled = process.env.PLAYWRIGHT_ENABLED === 'true';
  private browserPromise?: Promise<Browser>;
  private browser?: Browser;

  isEnabled() {
    return this.enabled;
  }

  async renderPage(options: RenderPageOptions): Promise<RenderPageResult> {
    const browser = await this.getBrowser();
    const context = await browser.newContext({
      userAgent: 'myapp-scraper/1.1 (+https://myapp.local)',
      viewport: { width: 1366, height: 900 },
    });

    try {
      const page = await context.newPage();

      try {
        const response = await page.goto(options.url, {
          waitUntil: 'domcontentloaded',
          timeout: options.timeoutMs,
        });

        if (options.waitForMs > 0) {
          await page.waitForTimeout(options.waitForMs);
        }

        await page
          .waitForLoadState('networkidle', {
            timeout: Math.min(options.timeoutMs, 10_000),
          })
          .catch(() => undefined);

        const html = await page.content();
        const byteLength = Buffer.byteLength(html, 'utf8');
        if (byteLength > options.maxContentLength) {
          throw new BadRequestException(
            `rendered content too large (${byteLength} bytes), max ${options.maxContentLength}`,
          );
        }

        return {
          statusCode: response?.status() ?? 200,
          finalUrl: page.url() || options.url,
          html,
        };
      } catch (error: unknown) {
        if (error instanceof BadRequestException) {
          throw error;
        }

        if (
          error instanceof Error &&
          (error.name === 'TimeoutError' || error.message.includes('Timeout'))
        ) {
          throw new RequestTimeoutException(
            `browser render timeout after ${options.timeoutMs}ms`,
          );
        }

        throw new BadGatewayException('browser render failed');
      }
    } finally {
      await context.close();
    }
  }

  async onModuleDestroy() {
    if (this.browser) {
      await this.browser.close();
      this.browser = undefined;
      this.browserPromise = undefined;
    }
  }

  private async getBrowser(): Promise<Browser> {
    if (!this.enabled) {
      throw new BadGatewayException(
        'browser rendering is disabled (set PLAYWRIGHT_ENABLED=true)',
      );
    }

    if (this.browser) {
      return this.browser;
    }

    if (!this.browserPromise) {
      this.browserPromise = chromium
        .launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        })
        .then((launchedBrowser) => {
          this.logger.log('Playwright browser launched');
          this.browser = launchedBrowser;
          return launchedBrowser;
        })
        .catch((error: unknown) => {
          this.browserPromise = undefined;
          this.browser = undefined;
          this.logger.error(
            'Playwright launch failed',
            error instanceof Error ? error.stack : undefined,
          );
          throw error;
        });
    }

    return this.browserPromise;
  }
}
