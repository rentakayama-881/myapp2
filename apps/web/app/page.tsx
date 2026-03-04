export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Top promo bar */}
      <div className="relative z-50 bg-gradient">
        <div className="container py-3">
          <div className="flex items-center justify-start gap-x-2 text-sm">
            <span className="font-medium">
              🎉 Early Bird Discount – <span className="font-semibold">20% off</span>!
            </span>

            <span className="max-sm:hidden opacity-85">
              Use code{" "}
              <span className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium bg-foreground/10 [[href]]:hover:bg-foreground/15">
                EARLYBIRD
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-x-3">
            <div className="size-9 rounded-lg bg-foreground/10 ring ring-inset ring-border" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">aivalid.id</span>
              <span className="text-xs text-muted-foreground">AI output validation</span>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <a
              href="#pricing"
              className="hidden md:inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-foreground/5 focus-ring"
            >
              Pricing
            </a>

            <a
              href="#features"
              className="hidden md:inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-foreground/5 focus-ring"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 focus-ring"
            >
              Get Lifetime Access
            </a>

            {/* Menu button (hamburger) */}
            <button
              className="inline-flex items-center justify-center rounded-lg border bg-background px-3 py-2 text-sm font-medium hover:bg-foreground/5 focus-ring lg:hidden"
              aria-label="Open menu"
            >
              <span className="mr-2">Menu</span>
              <span className="inline-grid gap-1">
                <span className="h-0.5 w-4 bg-foreground/70" />
                <span className="h-0.5 w-4 bg-foreground/70" />
                <span className="h-0.5 w-4 bg-foreground/70" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="animate-fade-in">
        <section className="py-fluid-lg">
          <div className="container flex flex-col items-center text-center gap-6">
            <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase text-[12px] -mb-2">
              Built for teams & builders
            </div>

            <h1 className="font-medium text-pretty text-4xl tracking-tighter md:text-5xl lg:text-6xl max-w-[13em]">
              Validate AI outputs before you ship them
            </h1>

            <p className="max-w-[42.5em] text-pretty text-secondary-foreground md:text-lg [word-break:break-word]">
              Platform validasi output AI untuk bantu pengguna memastikan hasil lebih akurat sebelum dieksekusi.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
              {/* Primary “rainbow border” CTA */}
              <a href="#pricing" className="rainbow-outline animate-rainbow">
                <span className="inline-flex items-center justify-center font-semibold whitespace-nowrap px-6 lg:px-8 py-3 lg:py-4 gap-[0.66ch] rounded-full bg-background hover:bg-foreground/5 focus-ring">
                  Get Lifetime Access <span aria-hidden>→</span>
                </span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border bg-background px-6 py-3 font-medium hover:bg-foreground/5 focus-ring"
              >
                View Features
              </a>
            </div>

            <div className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start flex-wrap text-sm text-secondary-foreground text-center mt-2">
              <div className="flex gap-x-1 gap-y-0.5 flex-row items-center place-content-start flex-wrap font-medium text-green-500/80 animate-pulse">
                🎁 20% off
              </div>
              <span className="text-muted-foreground/75 text-xs">/</span>
              <span>
                first 200 customers{" "}
                <span className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium bg-foreground/10">
                  3 left
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* “Built with the best” logo strip */}
        <section className="light bg-white text-foreground py-fluid-sm border-y">
          <div className="container flex flex-col gap-fluid-sm">
            <div className="flex w-full flex-col gap-y-4 items-center text-center">
              <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase text-[12px] -mb-2">
                Built With The Best
              </div>
              <h2 className="font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
                A battle-tested tech stack
              </h2>
            </div>

            <div className="w-full flex flex-wrap gap-x-12 gap-y-6 items-center justify-center lg:gap-x-16">
              {["React", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "NestJS"].map((x) => (
                <div
                  key={x}
                  className="text-sm font-medium text-foreground/50 hover:text-foreground/75 transition"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-fluid-lg">
          <div className="container flex flex-col gap-fluid-sm">
            <div className="flex w-full flex-col gap-y-4 items-center text-center">
              <h2 className="font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
                Everything you need to succeed
              </h2>
              <p className="max-w-[42.5em] text-pretty text-secondary-foreground md:text-lg [word-break:break-word]">
                Pola UI dan komponen ala dirstarter: border-l cards, icon badge, typography rapih, dan spacing “fluid”.
              </p>
            </div>

            {/* Mobile snap list + Desktop grid (dirstarter pattern) */}
            <div className="flex w-full overflow-x-auto snap-x snap-mandatory pl-0.5 sm:hidden">
              <div className="flex flex-col w-[85%] shrink-0 snap-center">
                {mobileFeatureItems().map((it) => (
                  <FeatureRow key={it.title} title={it.title} desc={it.desc} />
                ))}
              </div>
              <div className="flex flex-col w-[85%] shrink-0 snap-center">
                {mobileFeatureItems2().map((it) => (
                  <FeatureRow key={it.title} title={it.title} desc={it.desc} />
                ))}
              </div>
            </div>

            <div className="hidden w-full sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {allFeatures().map((it) => (
                <FeatureRow key={it.title} title={it.title} desc={it.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-fluid-lg border-t">
          <div className="container flex flex-col gap-fluid-sm">
            <div className="flex w-full flex-col gap-y-4 items-center text-center">
              <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase text-[12px] -mb-2">
                Pricing
              </div>
              <h2 className="font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
                Pay once, ship faster
              </h2>
              <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase text-[11px] text-center">
                Prices in USD. VAT may apply.
              </div>
            </div>

            <div className="flex flex-row items-stretch relative left-1/2 -translate-x-1/2 w-dvw overflow-x-auto snap-x snap-mandatory px-6 lg:static lg:translate-x-0 lg:w-full lg:overflow-clip lg:snap-none lg:px-0">
              <PriceCard
                name="Basic"
                desc="The essentials, ready to launch"
                price={159}
                strike={199}
                ringClass="ring ring-inset ring-border"
              />
              <PriceCard
                name="Pro"
                desc="Ship faster with extra goodies"
                price={199}
                strike={249}
                ringClass="ring ring-inset ring-primary/50 bg-primary/15 -mx-px relative z-10"
                badge="Most Popular"
              />
              <PriceCard
                name="Custom"
                desc="We set it up for you"
                price={999}
                ringClass="ring ring-inset ring-border"
                prefix="From"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="light bg-white text-foreground py-fluid-lg border-t" id="testimonials">
          <div className="container flex flex-col gap-fluid-sm">
            <div className="flex w-full flex-col gap-y-4 items-center text-center">
              <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase text-[12px] -mb-2">
                Testimonials
              </div>
              <h2 className="font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
                Makers love this style
              </h2>
              <p className="max-w-2xl text-pretty text-secondary-foreground md:text-lg">
                Ini placeholder. Nanti kamu ganti dengan testimoni asli.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "UI-nya berasa ‘produk beneran’. Spacing, typography, dan CTA-nya enak banget.",
                  name: "Customer A",
                  role: "Founder",
                },
                {
                  quote: "Komponen pricing + FAQ pattern ini bikin landing keliatan premium.",
                  name: "Customer B",
                  role: "Builder",
                },
                {
                  quote: "Design system-nya konsisten: rounded, ring, border-l cards—rapih.",
                  name: "Customer C",
                  role: "Engineer",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl p-6 border bg-background shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                >
                  <p className="text-sm leading-relaxed text-secondary-foreground">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="size-10 rounded-md bg-foreground/10" />
                    <div className="text-sm text-start">
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-fluid-lg border-t">
          <div className="container">
            <h2 className="font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 max-w-2xl text-secondary-foreground">
              Pattern FAQ-nya pakai <code className="px-1 rounded bg-foreground/5">details/summary</code> + badge plus.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Do I need technical knowledge to use this?",
                "How do I customize the design and features?",
                "What kind of support is included?",
                "Do you offer refunds?",
              ].map((q) => (
                <details
                  key={q}
                  className="rounded-xl border bg-background p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] open:bg-foreground/5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    {q}
                    <span className="ml-4 rounded-lg border bg-background px-2 py-1 text-xs text-muted-foreground">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                    Placeholder answer. Ganti dengan konten asli.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-fluid-sm border-t">
          <div className="container text-sm text-muted-foreground">
            © {new Date().getFullYear()} aivalid.id — built with a dirstarter-ish system.
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-x-3 gap-y-2 flex-col flex-wrap items-start text-start min-h-48 p-6 border-l sm:justify-end">
      <div className="p-3 mb-1 border rounded-xl text-muted-foreground size-12 bg-foreground/5" />
      <h4 className="font-medium text-pretty text-xl tracking-tight relative">
        <span className="absolute -left-6 -ml-0.5 w-0.75 h-7 bg-foreground rounded-full" />
        {title}
      </h4>
      <p className="max-w-xs text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function PriceCard(props: {
  name: string;
  desc: string;
  price: number;
  strike?: number;
  badge?: string;
  prefix?: string;
  ringClass: string;
}) {
  const { name, desc, price, strike, badge, prefix, ringClass } = props;

  return (
    <div
      className={[
        "flex flex-col gap-6 min-w-[95%] sm:min-w-92 flex-1 snap-center p-6 overflow-clip first:rounded-s-xl last:rounded-e-xl md:p-8 lg:min-w-0 lg:shrink",
        ringClass,
      ].join(" ")}
    >
      <div className="flex flex-col items-start flex-wrap gap-6">
        <div className="flex gap-x-1 gap-y-0.5 flex-col items-start flex-wrap">
          <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap">
            <h4 className="font-medium text-pretty text-xl tracking-tight">{name}</h4>
            {badge ? (
              <div className="font-mono font-medium tracking-wider uppercase text-[11px] bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full">
                {badge}
              </div>
            ) : null}
          </div>
          <p className="text-foreground/50 text-balance">{desc}</p>
        </div>

        <div className="relative flex items-baseline gap-0.5 h-14 text-muted-foreground">
          {prefix ? <span className="text-xs absolute -top-3.5 left-0">{prefix}</span> : null}
          <span className="text-2xl">$</span>
          <span className="relative">
            <span className="text-6xl font-medium tracking-tighter text-foreground">{price}</span>
            {typeof strike === "number" ? (
              <span className="absolute -top-[0.25em] left-full ml-2 text-lg font-normal before:absolute before:-inset-x-0.5 before:top-1/2 before:h-[0.075em] before:-rotate-10 before:bg-red-500/75">
                {strike}
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <hr className="-mx-8" />

      <div className="flex flex-col gap-3">
        {[
          "Complete Next.js v16 boilerplate",
          "Clean UI system (radius/ring/border)",
          "SEO-ready structure",
          "Modular components",
        ].map((x) => (
          <div key={x} className="flex gap-x-3 items-start">
            <span className="mt-1 size-4 rounded-md bg-foreground/15" />
            <span className="-mt-0.5 flex-1 text-sm text-secondary-foreground">{x}</span>
          </div>
        ))}
      </div>

      <button
        className="group/button inline-flex items-center justify-center font-medium whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none bg-foreground text-background hover:opacity-90 px-5 py-3 gap-[1ch] rounded-lg text-sm sm:text-base focus-ring"
        type="button"
      >
        Buy now
      </button>
    </div>
  );
}

function allFeatures() {
  return [
    { title: "Multiple Revenue Streams", desc: "Listings, featured spots, affiliates, ads." },
    { title: "SEO Optimized", desc: "Best practices so you rank higher." },
    { title: "Multi-language", desc: "i18n ready with easy translations." },
    { title: "Modern Tech Stack", desc: "Next.js, TS, Tailwind, Postgres." },
    { title: "AI Enabled", desc: "Generate & validate content workflows." },
    { title: "Analytics Ready", desc: "Track usage & outcomes quickly." },
  ];
}

function mobileFeatureItems() {
  return allFeatures().slice(0, 3);
}

function mobileFeatureItems2() {
  return allFeatures().slice(3, 6);
}
