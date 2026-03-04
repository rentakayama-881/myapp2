import { load, type CheerioAPI } from 'cheerio';
import TurndownService from 'turndown';
import { ScrapeMetadata, ScrapeStats } from './types/scrape.types';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

turndownService.remove(['script', 'style', 'noscript', 'iframe']);

interface ParseHtmlOptions {
  html: string;
  url: string;
  onlyMainContent: boolean;
  maxLinks: number;
}

export interface ParsedHtmlDocument {
  metadata: ScrapeMetadata;
  html: string;
  markdown: string;
  text: string;
  links: string[];
  stats: ScrapeStats;
}

export function parseHtmlDocument(options: ParseHtmlOptions): ParsedHtmlDocument {
  const $ = load(options.html);
  const metadata = extractMetadata($, options.url);
  const contentRoot = selectContentRoot($, options.onlyMainContent);
  const cleanedRoot = contentRoot.clone();

  cleanedRoot.find('script, style, noscript, iframe, svg, canvas').remove();
  cleanedRoot.find('nav, footer, aside').remove();

  const html = normalizeWhitespace(cleanedRoot.html() ?? '');
  const text = normalizeText(cleanedRoot.text());
  const markdown = normalizeText(turndownService.turndown(html || '<p></p>'));
  const links = extractLinks($, options.url, options.maxLinks);

  return {
    metadata,
    html,
    markdown,
    text,
    links,
    stats: {
      charCount: text.length,
      wordCount: text.length > 0 ? text.split(/\s+/).filter(Boolean).length : 0,
    },
  };
}

function selectContentRoot($: CheerioAPI, onlyMainContent: boolean) {
  if (!onlyMainContent) {
    return $('body');
  }

  const selectors = [
    'main',
    'article',
    '[role="main"]',
    '#main',
    '.main-content',
    '.content',
  ];

  for (const selector of selectors) {
    const candidate = $(selector).first();
    if (candidate.length === 0) {
      continue;
    }

    const candidateTextLength = normalizeText(candidate.text()).length;
    if (candidateTextLength >= 180) {
      return candidate;
    }
  }

  return $('body');
}

function extractMetadata($: CheerioAPI, pageUrl: string): ScrapeMetadata {
  const canonical = readAttr($, 'link[rel="canonical"]', 'href');

  return {
    title: readText($, 'title'),
    description: readAttr($, 'meta[name="description"]', 'content'),
    language: readAttr($, 'html', 'lang'),
    canonicalUrl: canonical ?? pageUrl,
    ogTitle: readAttr($, 'meta[property="og:title"]', 'content'),
    ogDescription: readAttr($, 'meta[property="og:description"]', 'content'),
  };
}

function extractLinks($: CheerioAPI, pageUrl: string, maxLinks: number): string[] {
  const links: string[] = [];
  const seen = new Set<string>();

  $('a[href]').each((_, element) => {
    if (links.length >= maxLinks) {
      return;
    }

    const href = $(element).attr('href');
    if (!href) {
      return;
    }

    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    try {
      const absolute = new URL(href, pageUrl);
      if (absolute.protocol !== 'http:' && absolute.protocol !== 'https:') {
        return;
      }

      absolute.hash = '';
      const resolved = absolute.toString();

      if (seen.has(resolved)) {
        return;
      }

      seen.add(resolved);
      links.push(resolved);
    } catch {
      return;
    }
  });

  return links;
}

function readText($: CheerioAPI, selector: string): string | null {
  const value = normalizeText($(selector).first().text());
  return value.length > 0 ? value : null;
}

function readAttr(
  $: CheerioAPI,
  selector: string,
  attr: string,
): string | null {
  const value = $(selector).first().attr(attr);
  if (!value) {
    return null;
  }

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}
