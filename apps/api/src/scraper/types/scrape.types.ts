export enum ScrapeFormat {
  Markdown = 'markdown',
  Html = 'html',
  Text = 'text',
  Links = 'links',
  Metadata = 'metadata',
}

export interface ScrapeMetadata {
  title: string | null;
  description: string | null;
  language: string | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
}

export interface ScrapeContent {
  markdown?: string;
  html?: string;
  text?: string;
}

export interface ScrapeStats {
  charCount: number;
  wordCount: number;
}

export interface ScrapeData {
  url: string;
  finalUrl: string;
  fetchedAt: string;
  statusCode: number;
  source: "http" | "browser";
  metadata?: ScrapeMetadata;
  content: ScrapeContent;
  links?: string[];
  stats: ScrapeStats;
}

export interface ScrapeResponse {
  success: true;
  data: ScrapeData;
}

export interface CrawlPage {
  url: string;
  depth: number;
  statusCode: number;
  source: "http" | "browser";
  title: string | null;
  description: string | null;
  linksDiscovered: number;
  content?: ScrapeContent;
}

export interface CrawlError {
  url: string;
  depth: number;
  message: string;
}

export interface CrawlResponse {
  success: true;
  data: {
    startUrl: string;
    startedAt: string;
    completedAt: string;
    pages: CrawlPage[];
    errors: CrawlError[];
    stats: {
      pagesVisited: number;
      pagesSucceeded: number;
      pagesFailed: number;
      queueRemaining: number;
    };
  };
}

export type CrawlJobStatus = "queued" | "running" | "completed" | "failed";

export interface CrawlJobRecord {
  id: string;
  status: CrawlJobStatus;
  createdAt: string;
  updatedAt: string;
  request: Record<string, unknown>;
  result?: CrawlResponse;
  error?: string;
}
