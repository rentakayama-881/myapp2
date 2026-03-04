import { Injectable, Logger, NotFoundException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { JobState, Queue, Worker } from 'bullmq';
import { randomUUID } from 'node:crypto';
import { CrawlRequestDto } from './dto/crawl-request.dto';
import { CrawlerService } from './crawler.service';
import { CrawlJobRecord, CrawlJobStatus, CrawlResponse } from './types/scrape.types';

interface CrawlJobEntity extends CrawlJobRecord {
  requestPayload: CrawlRequestDto;
}

const CRAWL_QUEUE_NAME = 'scraper:crawl-jobs';

type ExtendedQueueState = JobState | 'waiting-children' | 'unknown';

export function mapQueueStateToStatus(state: ExtendedQueueState): CrawlJobStatus {
  if (state === 'completed') {
    return 'completed';
  }

  if (state === 'failed') {
    return 'failed';
  }

  if (state === 'active') {
    return 'running';
  }

  return 'queued';
}

@Injectable()
export class CrawlJobService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(CrawlJobService.name);
  private readonly jobs = new Map<string, CrawlJobEntity>();

  private queue?: Queue<CrawlRequestDto, CrawlResponse>;
  private worker?: Worker<CrawlRequestDto, CrawlResponse>;
  private useRedisQueue = false;

  constructor(private readonly crawlerService: CrawlerService) {}

  async onModuleInit() {
    const redisUrl = process.env.REDIS_URL?.trim();
    if (!redisUrl) {
      this.logger.warn('REDIS_URL is not set. crawl jobs running in in-memory mode');
      this.useRedisQueue = false;
      return;
    }

    try {
      const connection = {
        url: redisUrl,
        maxRetriesPerRequest: null,
      };

      this.queue = new Queue<CrawlRequestDto, CrawlResponse>(CRAWL_QUEUE_NAME, {
        connection,
      });
      await this.queue.waitUntilReady();

      const concurrency = Number(process.env.SCRAPER_QUEUE_CONCURRENCY ?? 2);
      this.worker = new Worker<CrawlRequestDto, CrawlResponse>(
        CRAWL_QUEUE_NAME,
        async (job) => {
          this.logger.log(`processing crawl job ${job.id}`);
          return this.crawlerService.crawl(job.data);
        },
        {
          connection,
          concurrency,
        },
      );
      await this.worker.waitUntilReady();

      this.worker.on('error', (error: Error) => {
        this.logger.error('crawl worker error', error.stack);
      });

      this.worker.on('failed', (job, error) => {
        this.logger.warn(
          `crawl job failed jobId=${job?.id ?? 'unknown'} message=${error.message}`,
        );
      });

      this.useRedisQueue = true;
      this.logger.log(`crawl jobs running in redis queue mode (${CRAWL_QUEUE_NAME})`);
    } catch (error: unknown) {
      this.logger.error(
        'failed to initialize redis queue, fallback to in-memory mode',
        error instanceof Error ? error.stack : undefined,
      );
      await this.teardownRedis();
      this.useRedisQueue = false;
    }
  }

  async onModuleDestroy() {
    await this.teardownRedis();
  }

  async createJob(payload: CrawlRequestDto) {
    if (this.useRedisQueue && this.queue) {
      const retentionAgeSeconds = Number(
        process.env.SCRAPER_QUEUE_RETENTION_SECONDS ?? 86_400,
      );

      const job = await this.queue.add('crawl', payload, {
        removeOnComplete: {
          age: retentionAgeSeconds,
          count: 2_000,
        },
        removeOnFail: {
          age: retentionAgeSeconds,
          count: 2_000,
        },
      });

      const jobId = String(job.id);

      return {
        success: true,
        data: {
          id: jobId,
          status: 'queued',
          backend: 'redis',
          createdAt: new Date(job.timestamp).toISOString(),
          statusPath: `/v1/scraper/crawl/jobs/${jobId}`,
        },
      };
    }

    return this.createInMemoryJob(payload);
  }

  async getJob(jobId: string) {
    if (this.useRedisQueue && this.queue) {
      const job = await this.queue.getJob(jobId);
      if (!job) {
        throw new NotFoundException('crawl job not found');
      }

      const state = await job.getState();
      const status = mapQueueStateToStatus(state);

      return {
        success: true,
        data: {
          id: String(job.id),
          status,
          backend: 'redis',
          createdAt: new Date(job.timestamp).toISOString(),
          updatedAt: new Date(
            job.finishedOn ?? job.processedOn ?? job.timestamp,
          ).toISOString(),
          error: job.failedReason || undefined,
          result: status === 'completed' ? (job.returnvalue as CrawlResponse) : undefined,
        },
      };
    }

    return this.getInMemoryJob(jobId);
  }

  private createInMemoryJob(payload: CrawlRequestDto) {
    this.cleanupOldJobs();

    const now = new Date().toISOString();
    const jobId = randomUUID();

    const job: CrawlJobEntity = {
      id: jobId,
      status: 'queued',
      createdAt: now,
      updatedAt: now,
      request: payload as unknown as Record<string, unknown>,
      requestPayload: payload,
    };

    this.jobs.set(jobId, job);
    queueMicrotask(() => {
      void this.runInMemoryJob(jobId);
    });

    return {
      success: true,
      data: {
        id: job.id,
        status: job.status,
        backend: 'memory',
        createdAt: job.createdAt,
        statusPath: `/v1/scraper/crawl/jobs/${job.id}`,
      },
    };
  }

  private getInMemoryJob(jobId: string) {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new NotFoundException('crawl job not found');
    }

    return {
      success: true,
      data: {
        id: job.id,
        status: job.status,
        backend: 'memory',
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
        error: job.error,
        result: job.result,
      },
    };
  }

  private async runInMemoryJob(jobId: string) {
    const job = this.jobs.get(jobId);
    if (!job) {
      return;
    }

    job.status = 'running';
    job.updatedAt = new Date().toISOString();

    try {
      const result = await this.crawlerService.crawl(job.requestPayload);
      job.status = 'completed';
      job.result = result;
      job.error = undefined;
      job.updatedAt = new Date().toISOString();
    } catch (error: unknown) {
      job.status = 'failed';
      job.error = error instanceof Error ? error.message : 'crawl job failed';
      job.updatedAt = new Date().toISOString();
    }
  }

  private cleanupOldJobs() {
    const threshold = Date.now() - 6 * 60 * 60 * 1000;

    for (const [jobId, job] of this.jobs.entries()) {
      const updatedAt = new Date(job.updatedAt).getTime();
      if (updatedAt < threshold) {
        this.jobs.delete(jobId);
      }
    }
  }

  private async teardownRedis() {
    this.useRedisQueue = false;

    if (this.worker) {
      await this.worker.close();
      this.worker = undefined;
    }

    if (this.queue) {
      await this.queue.close();
      this.queue = undefined;
    }
  }
}
