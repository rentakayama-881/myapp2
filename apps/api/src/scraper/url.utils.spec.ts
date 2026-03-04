import {
  canonicalizeUrl,
  compileExcludePatterns,
  isSameDomain,
  normalizeInputUrl,
} from './url.utils';

describe('url.utils', () => {
  it('normalizes URL without protocol', () => {
    const parsed = normalizeInputUrl('example.com/docs');
    expect(parsed.toString()).toBe('https://example.com/docs');
  });

  it('rejects unsupported protocols', () => {
    expect(() => normalizeInputUrl('ftp://example.com')).toThrow(
      'only http/https urls are allowed',
    );
  });

  it('canonicalizes URL with ignored query params', () => {
    const parsed = normalizeInputUrl('https://example.com/path/?a=1&b=2#section');
    expect(canonicalizeUrl(parsed, true)).toBe('https://example.com/path');
  });

  it('matches domain and subdomain options', () => {
    const source = new URL('https://example.com');
    const child = new URL('https://docs.example.com');

    expect(isSameDomain(source, child, false)).toBe(false);
    expect(isSameDomain(source, child, true)).toBe(true);
  });

  it('compiles valid exclude regex and skips invalid patterns', () => {
    const patterns = compileExcludePatterns(['\\/admin', '[invalid']);
    expect(patterns).toHaveLength(1);
    expect(patterns[0]?.test('/admin')).toBe(true);
  });
});
