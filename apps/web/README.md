# @myapp/web

Next.js frontend untuk `aivalid.id`.

## Routes

- `/` -> landing page modular dengan style baseline dari referensi `index.html`
- `/playground` -> tester endpoint scraper/crawler

## Landing Structure

Konten temporary terpusat di:

- `apps/web/content/landing-content.ts`

Section modular:

- `apps/web/components/landing/background-stars.tsx`
- `apps/web/components/landing/promo-bar.tsx`
- `apps/web/components/landing/top-nav.tsx`
- `apps/web/components/landing/hero-section.tsx`
- `apps/web/components/landing/stack-section.tsx`
- `apps/web/components/landing/features-section.tsx`
- `apps/web/components/landing/pricing-section.tsx`
- `apps/web/components/landing/quote-strip.tsx`
- `apps/web/components/landing/faq-section.tsx`
- `apps/web/components/landing/testimonials-section.tsx`
- `apps/web/components/landing/bottom-cta-section.tsx`
- `apps/web/components/landing/footer-section.tsx`

Token style/utility global:

- `apps/web/app/globals.css`

Ikon SVG reusable:

- `apps/web/components/icons/marketing-icons.tsx`

## Typography Guard

`typography:check` tetap aktif untuk halaman non-landing.
Landing module (`app/page.tsx` + `components/landing`) dikecualikan karena meniru class sizing referensi.

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
pnpm --filter @myapp/web typography:check
```
