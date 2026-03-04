export function normalizeInputUrl(rawUrl: string): URL {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    throw new Error('url is required');
  }

  const withProtocol = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  let parsed: URL;
  try {
    parsed = new URL(withProtocol);
  } catch {
    throw new Error('url is invalid');
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error('only http/https urls are allowed');
  }

  parsed.hash = '';
  return parsed;
}

export function canonicalizeUrl(url: URL, ignoreQueryParams: boolean): string {
  const clone = new URL(url.toString());

  if (ignoreQueryParams) {
    clone.search = '';
  }

  if (clone.pathname !== '/' && clone.pathname.endsWith('/')) {
    clone.pathname = clone.pathname.slice(0, -1);
  }

  return clone.toString();
}

export function isSameDomain(
  source: URL,
  target: URL,
  includeSubdomains: boolean,
): boolean {
  if (source.hostname === target.hostname) {
    return true;
  }

  if (!includeSubdomains) {
    return false;
  }

  return target.hostname.endsWith(`.${source.hostname}`);
}

export function compileExcludePatterns(patterns: string[]): RegExp[] {
  const compiled: RegExp[] = [];

  for (const pattern of patterns) {
    if (!pattern.trim()) {
      continue;
    }

    try {
      compiled.push(new RegExp(pattern, 'i'));
    } catch {
      continue;
    }
  }

  return compiled;
}
