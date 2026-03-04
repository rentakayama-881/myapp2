# @myapp/web

Next.js frontend untuk `aivalid.id`.

## Routes

- `/` -> modular landing page (batch UI utama)
- `/playground` -> tester untuk endpoint scraper/crawler

## Editable Landing Content

Ubah konten tanpa sentuh komponen di file:

- `apps/web/content/landing-content.ts`

Komponen landing dipisah modular:

- `apps/web/components/landing/top-nav.tsx`
- `apps/web/components/landing/hero-section.tsx`
- `apps/web/components/landing/features-section.tsx`
- `apps/web/components/landing/bottom-cta-section.tsx`
- `apps/web/components/icons/marketing-icons.tsx`

## Env

```bash
API_INTERNAL_BASE_URL=http://localhost:4000/v1
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/v1
```

## Scripts

```bash
pnpm --filter @myapp/web dev
pnpm --filter @myapp/web build
pnpm --filter @myapp/web lint
pnpm --filter @myapp/web typecheck
```
