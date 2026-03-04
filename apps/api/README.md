# @myapp/api

NestJS backend for scraper/crawler service.

## Env

```bash
PORT=4000
DATABASE_URL=postgresql://myapp:change-me@localhost:5432/myapp_db?schema=public
CORS_ORIGIN=http://localhost:3000
SCRAPER_API_KEY=dev-change-this
REDIS_URL=redis://localhost:6379
SCRAPER_QUEUE_CONCURRENCY=2
SCRAPER_QUEUE_RETENTION_SECONDS=86400
PLAYWRIGHT_ENABLED=false
PLAYWRIGHT_STRICT_MODE=false
SCRAPER_DEFAULT_RENDER_JS=false
```

Notes:
- If `SCRAPER_API_KEY` is set, all `/v1/scraper/*` routes require header `x-api-key`.
- If `REDIS_URL` is set and reachable, crawl jobs use durable Redis queue.
- If `PLAYWRIGHT_ENABLED=true`, install browser once:

```bash
pnpm --filter @myapp/api exec playwright install chromium
```

## Scripts

```bash
pnpm --filter @myapp/api dev
pnpm --filter @myapp/api build
pnpm --filter @myapp/api lint
pnpm --filter @myapp/api typecheck
pnpm --filter @myapp/api test
```
