import { parseHtmlDocument } from './parser';

describe('parser', () => {
  it('extracts metadata, links, and markdown from html', () => {
    const html = `
      <!doctype html>
      <html lang="en">
        <head>
          <title>Demo Page</title>
          <meta name="description" content="A demo page" />
          <link rel="canonical" href="https://example.com/demo" />
        </head>
        <body>
          <header>Header content</header>
          <main>
            <h1>Hello Scraper</h1>
            <p>This is a sample paragraph for parsing.</p>
            <a href="/docs">Docs</a>
            <a href="https://example.com/pricing">Pricing</a>
          </main>
        </body>
      </html>
    `;

    const result = parseHtmlDocument({
      html,
      url: 'https://example.com',
      onlyMainContent: true,
      maxLinks: 10,
    });

    expect(result.metadata.title).toBe('Demo Page');
    expect(result.metadata.description).toBe('A demo page');
    expect(result.metadata.canonicalUrl).toBe('https://example.com/demo');
    expect(result.markdown).toContain('Hello Scraper');
    expect(result.text).toContain('sample paragraph');
    expect(result.links).toContain('https://example.com/docs');
    expect(result.links).toContain('https://example.com/pricing');
    expect(result.stats.wordCount).toBeGreaterThan(3);
  });
});
