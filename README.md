# myapp - Firecrawl-style Scraper Starter

Monorepo:
- `apps/api`: NestJS 11 + Prisma 7 + PostgreSQL + BullMQ + Playwright
- `apps/web`: Next.js 16 + Tailwind CSS 4

## Implemented

Backend API (`/v1/scraper`):
- `POST /scraper/scrape`: scrape 1 page (markdown/html/text/links/metadata)
- `POST /scraper/crawl`: crawl website sync (BFS)
- `POST /scraper/crawl/jobs`: crawl async job (Redis queue mode or fallback memory mode)
- `GET /scraper/crawl/jobs/:jobId`: poll async job status

Infra/security:
- Global validation + throttling
- API key guard (`x-api-key` via `SCRAPER_API_KEY`)
- Redis-backed durable queue (`REDIS_URL`)
- Optional JS rendering via Playwright (`PLAYWRIGHT_ENABLED=true`)

## Quick start

1. Copy env:
```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

2. Install dependencies:
```bash
pnpm install
```

3. Start infrastructure:
```bash
docker compose up -d db redis
```

4. Prisma setup:
```bash
pnpm db:generate
pnpm db:migrate
```

5. (Optional) Enable browser rendering:
```bash
# required once per environment when PLAYWRIGHT_ENABLED=true
pnpm --filter @myapp/api exec playwright install chromium
```

6. Run apps:
```bash
pnpm dev:api
pnpm dev:web
```

## Health check
- API: `http://localhost:4000/v1/health/live`
- Web: `http://localhost:3000`

## API examples

Scrape with JS rendering enabled:
```bash
curl -X POST http://localhost:4000/v1/scraper/scrape \
  -H 'content-type: application/json' \
  -H 'x-api-key: dev-change-this' \
  -d '{
    "url": "https://example.com",
    "formats": ["markdown", "metadata", "links"],
    "renderJavaScript": true,
    "waitForMs": 500
  }'
```

Create async crawl job:
```bash
curl -X POST http://localhost:4000/v1/scraper/crawl/jobs \
  -H 'content-type: application/json' \
  -H 'x-api-key: dev-change-this' \
  -d '{"url":"https://example.com","maxPages":100,"renderJavaScript":true}'

curl http://localhost:4000/v1/scraper/crawl/jobs/<job-id> \
  -H 'x-api-key: dev-change-this'
```
