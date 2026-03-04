# @myapp/web

Next.js frontend playground to test scraper and crawler APIs.

## Env

```bash
API_INTERNAL_BASE_URL=http://localhost:4000/v1
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/v1
```

## Features in UI
- Run `scrape`, `crawl`, and `crawl-job`
- Pass `x-api-key`
- Toggle `renderJavaScript` and `waitForMs`
- Poll async crawl job status by job id

## Scripts

```bash
pnpm --filter @myapp/web dev
pnpm --filter @myapp/web build
pnpm --filter @myapp/web lint
pnpm --filter @myapp/web typecheck
```
