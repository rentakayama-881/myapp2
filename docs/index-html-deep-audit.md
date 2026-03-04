# Deep Audit: `index.html` Style/Behavior Baseline (1:1 Reference)

Dokumen ini adalah hasil eksplorasi mendalam dari sumber tunggal [`/home/alep/index.html`](../../index.html) untuk dipakai sebagai baseline styling dan interaction rule saat implementasi ulang landing page di `myapp`.

## 1. Scope Audit
- Sumber: `/home/alep/index.html` (minified, single-line HTML).
- Tujuan: menangkap komponen penting, style tokens, state rules, fallback/hydration payload, dan dependency eksternal.
- Prinsip: no assumption. Semua poin diturunkan dari snapshot parsing atau manifest hasil ekstraksi.

## 2. Ringkasan Integritas
Mengacu ke [`index-html-audit/integrity-summary.txt`](./index-html-audit/integrity-summary.txt):
- `index.html bytes`: `449896`
- `class attributes`: `1095`
- `unique class tokens`: `397`
- `arbitrary class tokens`: `43`
- `section count`: `8`
- `heading-ish nodes tracked`: `77`
- `icon tokens tracked`: `26`

## 3. Component Inventory (Main Structure)
Mengacu ke [`index-html-audit/sections.map.txt`](./index-html-audit/sections.map.txt):
1. `section` hero: `class="w-full scroll-mt-8 py-fluid-lg"`
2. `section` stack logos: `class="w-full scroll-mt-8 light bg-white text-foreground py-fluid-lg"`
3. `section` features: `id="features"`
4. `section` pricing: `id="pricing"`
5. `section` quote: `id="quote"`
6. `section` faq: `id="faq"`
7. `section` testimonials: `id="testimonials"`
8. `section` bottom CTA: `class="w-full scroll-mt-8 bg-gradient overflow-clip ..."`

Header dan mobile menu shell mengacu ke snippet kritikal:
- [`index-html-audit/critical-snippets.txt`](./index-html-audit/critical-snippets.txt) bagian `HEADER_BLOCK`.

## 4. Style Token Registry
### 4.1 Full Registry (wajib dipakai sebagai source of truth)
- Semua class attribute mentah: [`index-html-audit/class-attributes.raw.txt`](./index-html-audit/class-attributes.raw.txt)
- Semua token class unik: [`index-html-audit/class-tokens.unique.txt`](./index-html-audit/class-tokens.unique.txt)
- Frekuensi token class: [`index-html-audit/class-tokens.frequency.txt`](./index-html-audit/class-tokens.frequency.txt)
- Token arbitrary/state selector: [`index-html-audit/class-tokens.arbitrary.txt`](./index-html-audit/class-tokens.arbitrary.txt)

### 4.2 Token dominan (indikasi arah visual)
Top frequencies:
- `flex`, `lucide`, `fill-current`, `size-3`
- `text-sm`, `text-muted-foreground`, `text-secondary-foreground`, `text-pretty`
- `rounded-md`, `rounded-xl`, `rounded-full`, `rounded-lg`
- `animate-pulse`, `animate-fade-in`, `animate-rainbow`, `animate-marquee`
- `bg-foreground/15`, `bg-foreground/5`, `bg-background`

### 4.3 Token advanced/arbitrary penting
Contoh rule yang wajib dipertahankan 1:1:
- `group-data-[state=open]:rotate-45`
- `data-[state=open]:text-foreground`
- `[background-clip:padding-box,border-box,border-box]`
- `[background-origin:border-box]`
- `[border:calc(0.125rem)_solid_transparent]`
- `bg-[linear-gradient(...)]`
- `before:[filter:blur(0.75rem)]`
- `[[href]]:hover:bg-foreground/15`

Daftar lengkap ada di [`index-html-audit/class-tokens.arbitrary.txt`](./index-html-audit/class-tokens.arbitrary.txt).

## 5. Behavior & State Rules
### 5.1 Header + Mobile Nav
Mengacu ke [`index-html-audit/critical-snippets.txt`](./index-html-audit/critical-snippets.txt) bagian `HEADER_BLOCK` dan `MOBILE_MENU_STATE_CLASSES`:
- Header base: `sticky top-0 z-49 duration-100`
- Mobile panel default hidden: `-translate-y-full opacity-0`
- Mobile panel transition: `transition-all duration-200 ease-in-out`
- Toggle menu button: `aria-label="Toggle menu"`

Catatan penting:
- Rule transform dari hidden -> open untuk mobile menu tidak fully visible dalam static HTML ini (kemungkinan diset runtime).
- Perubahan visual header saat scroll (transparan -> boxed) juga tidak muncul eksplisit di static snapshot; kemungkinan runtime behavior dari JS/CSS eksternal.

### 5.2 FAQ Accordion
Mengacu ke [`index-html-audit/data-aria-role.map.txt`](./index-html-audit/data-aria-role.map.txt):
- State carrier: `data-state="closed"`, `aria-expanded="false"`
- Orientation: `data-orientation="vertical"`
- Open-state visual hooks: `data-[state=open]:text-foreground`, `group-data-[state=open]:rotate-45`

### 5.3 Promo / Offer Fallback
Mengacu ke [`index-html-audit/critical-snippets.txt`](./index-html-audit/critical-snippets.txt):
- `FALLBACK_S0`: promo bar atas (`Early Bird Discount – 20% off`, code badge)
- `FALLBACK_S1`: promo inline hero (`20% off / first 200 customers / 3 left`)
- `FALLBACK_S2`: promo inline pricing (struktur sama, dengan `px-2 py-1 bg-foreground/5 border rounded-lg mt-2`)

## 6. Icon System
Mengacu ke [`index-html-audit/lucide-icons.map.txt`](./index-html-audit/lucide-icons.map.txt):
- Dominan: `lucide-star` (rating/testimonial), `lucide-plus` (FAQ), `lucide-gift` (promo).
- Ikon feature/pricing: `lucide-dollar-sign`, `lucide-globe`, `lucide-code`, `lucide-credit-card`, dll.

## 7. Accessibility/Data/Role Map
Mengacu ke [`index-html-audit/data-aria-role.map.txt`](./index-html-audit/data-aria-role.map.txt):
- `aria-hidden="true"` dominan untuk ikon dekoratif.
- `role="region"` dipakai di accordion panels.
- `aria-controls`, `aria-labelledby` dan `aria-expanded` dipakai konsisten pada FAQ.

## 8. External Dependency Manifest
Mengacu ke [`index-html-audit/assets.manifest.txt`](./index-html-audit/assets.manifest.txt):
- CSS penting direferensikan sebagai `_next/static/chunks/*.css`.
- Banyak JS chunk + preload `js/pixel.min.js` dan `js/script.js`.
- Asset ini tidak tersedia lokal di `/home/alep` saat audit; diperlakukan sebagai dependency eksternal.

## 9. Re-implementation Contract (Untuk `myapp`)
1. Struktur section harus mempertahankan urutan 8 blok utama.
2. Header/mobile menu harus memakai state classes yang sama (default hidden + transition).
3. Promo blocks `S0/S1/S2` harus dipetakan 1:1 ke komponen reusable (`promo-bar`, `hero-offer-chip`, `pricing-offer-chip`).
4. FAQ harus mempertahankan semantics accordion (`aria-*`, `data-state`, rotate icon rule).
5. Token arbitrary tidak boleh disederhanakan tanpa verifikasi visual.
6. Semua styling baru wajib cross-check ke file registry (`class-tokens.unique`, `class-tokens.arbitrary`).

## 10. Lampiran Audit
- Snapshot parse tag: [`index-html-audit/index-tags.snapshot.txt`](./index-html-audit/index-tags.snapshot.txt)
- Snippet kritikal: [`index-html-audit/critical-snippets.txt`](./index-html-audit/critical-snippets.txt)
- Section map: [`index-html-audit/sections.map.txt`](./index-html-audit/sections.map.txt)
- Heading map: [`index-html-audit/headings.map.txt`](./index-html-audit/headings.map.txt)
- Class registry lengkap: [`index-html-audit/class-tokens.unique.txt`](./index-html-audit/class-tokens.unique.txt)
- Class frequency: [`index-html-audit/class-tokens.frequency.txt`](./index-html-audit/class-tokens.frequency.txt)
- Arbitrary/state token list: [`index-html-audit/class-tokens.arbitrary.txt`](./index-html-audit/class-tokens.arbitrary.txt)
- Data/aria/role map: [`index-html-audit/data-aria-role.map.txt`](./index-html-audit/data-aria-role.map.txt)
- Asset dependency manifest: [`index-html-audit/assets.manifest.txt`](./index-html-audit/assets.manifest.txt)
- Icon map: [`index-html-audit/lucide-icons.map.txt`](./index-html-audit/lucide-icons.map.txt)

