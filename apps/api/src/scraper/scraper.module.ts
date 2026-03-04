import { Module } from '@nestjs/common';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CrawlJobService } from './crawl-job.service';
import { CrawlerService } from './crawler.service';
import { RenderingService } from './rendering.service';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service';

@Module({
  controllers: [ScraperController],
  providers: [
    ScraperService,
    CrawlerService,
    CrawlJobService,
    RenderingService,
    ApiKeyGuard,
  ],
  exports: [ScraperService, CrawlerService],
})
export class ScraperModule {}
