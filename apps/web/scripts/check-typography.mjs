import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT_DIR = process.cwd();
const SCAN_DIRS = ['app', 'components'];
const FILE_EXTENSIONS = new Set(['.ts', '.tsx']);
const EXCLUDED_PATH_SEGMENTS = [
  '/playground/',
  '/.next/',
  '/node_modules/',
  '/components/landing/',
];
const EXCLUDED_RELATIVE_FILES = new Set(['app/page.tsx']);

const disallowedTextSizeRegex =
  /\btext-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|\[[^\]]+\])\b/g;

async function main() {
  const files = await collectFiles();
  const violations = [];

  for (const file of files) {
    const relativePath = file.replace(`${ROOT_DIR}/`, '');

    if (EXCLUDED_RELATIVE_FILES.has(relativePath)) {
      continue;
    }

    if (EXCLUDED_PATH_SEGMENTS.some((segment) => file.includes(segment))) {
      continue;
    }

    const content = await readFile(file, 'utf8');
    const matches = [...content.matchAll(disallowedTextSizeRegex)].map(
      (match) => match[0],
    );

    if (matches.length > 0) {
      violations.push({
        file: relativePath,
        matches: Array.from(new Set(matches)),
      });
    }
  }

  if (violations.length > 0) {
    console.error('\nTypography policy violation detected.');
    console.error(
      'Use semantic typography classes outside landing modules instead of raw text-size utilities.\n',
    );

    for (const violation of violations) {
      console.error(`- ${violation.file}`);
      console.error(`  disallowed: ${violation.matches.join(', ')}`);
    }

    process.exit(1);
  }

  console.log('Typography check passed.');
}

async function collectFiles() {
  const collected = [];

  for (const dir of SCAN_DIRS) {
    const absoluteDir = join(ROOT_DIR, dir);
    const files = await walk(absoluteDir);
    collected.push(...files);
  }

  return collected;
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      const nested = await walk(fullPath);
      files.push(...nested);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = fullPath.slice(fullPath.lastIndexOf('.'));
    if (!FILE_EXTENSIONS.has(extension)) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

void main();
