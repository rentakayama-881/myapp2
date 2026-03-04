export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-72 right-1/4 h-[360px] w-[360px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 border-b border-white/10 bg-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2 text-xs text-white/80">
          🎉 Early Bird Discount — <span className="ml-1 font-semibold text-white">20% off</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90" />
            <span className="text-sm font-semibold tracking-tight">YourBrand</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/15 transition"
            >
              Get Lifetime Access
            </a>

            <button
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 backdrop-blur hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              {/* hamburger */}
              <div className="space-y-1">
                <div className="h-0.5 w-5 bg-white/80" />
                <div className="h-0.5 w-5 bg-white/80" />
                <div className="h-0.5 w-5 bg-white/80" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-24">
          <p className="mb-4 text-center text-xs tracking-[0.35em] text-white/50">
            THE TECH BEHIND YOUR PRODUCT
          </p>

          <h1 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-6xl">
            Build, monetize, and scale your product with Next.js
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/65 sm:text-lg">
            A complete, customizable template with payments, SEO, and a modern UI
            — pay once, launch faster.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition sm:w-auto"
            >
              Get Lifetime Access <span aria-hidden>→</span>
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur hover:bg-white/10 transition sm:w-auto"
            >
              View Features
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/55">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              🎁 <span className="text-emerald-300">20% off</span>
            </span>
            <span>first 200 customers</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs">3 left</span>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Multiple revenue streams", "Listings, featured spots, affiliates, ads."],
              ["SEO optimized", "Best practices so you rank higher."],
              ["Multi-language", "i18n ready with easy translations."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:bg-white/[0.09]"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 max-w-2xl text-white/60">
            We answered common questions. If you need anything else, contact us.
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
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur open:bg-white/[0.09]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/85">
                  {q}
                  <span className="ml-4 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Example answer. Replace with your real content.
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
