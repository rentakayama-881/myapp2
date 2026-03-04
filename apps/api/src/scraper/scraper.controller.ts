import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CrawlJobService } from './crawl-job.service';
import { CrawlerService } from './crawler.service';
import { CrawlRequestDto } from './dto/crawl-request.dto';
import { ScrapeRequestDto } from './dto/scrape-request.dto';
import { ScraperService } from './scraper.service';

@Controller('scraper')
@UseGuards(ApiKeyGuard)
export class ScraperController {
  constructor(
    private readonly scraperService: ScraperService,
    private readonly crawlerService: CrawlerService,
    private readonly crawlJobService: CrawlJobService,
  ) {}

  @Post('scrape')
  async scrape(@Body() payload: ScrapeRequestDto) {
    return this.scraperService.scrape(payload);
  }

  @Post('crawl')
  async crawl(@Body() payload: CrawlRequestDto) {
    return this.crawlerService.crawl(payload);
  }

  @Post('crawl/jobs')
  createCrawlJob(@Body() payload: CrawlRequestDto) {
    return this.crawlJobService.createJob(payload);
  }

  @Get('crawl/jobs/:jobId')
  getCrawlJob(@Param('jobId') jobId: string) {
    return this.crawlJobService.getJob(jobId);
  }
}
