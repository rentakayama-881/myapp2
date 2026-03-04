export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Spotlight */}
        <div className="absolute left-1/2 top-[-220px] h-[720px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_60%)] blur-2xl" />
        {/* Color haze */}
        <div className="absolute -left-36 top-48 h-[520px] w-[520px] rounded-full bg-indigo-500/16 blur-3xl" />
        <div className="absolute right-[-160px] top-80 h-[480px] w-[480px] rounded-full bg-emerald-400/12 blur-3xl" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.92)_85%)]" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 border-b border-white/10 bg-white/[0.04] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2 text-[12px] text-white/75">
          🎉 Early Bird Discount —{" "}
          <span className="ml-1 font-semibold text-white">20% off</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-[10px] bg-white/90" />
            <span className="text-sm font-semibold tracking-tight">YourBrand</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Dirstarter-like pill */}
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.35),0_12px_40px_rgba(0,0,0,0.35)] transition hover:bg-white"
            >
              Get Lifetime Access
            </a>

            <button
              className="inline-flex items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.06] p-2 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur transition hover:bg-white/[0.10]"
              aria-label="Open menu"
            >
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
          <p className="mb-4 text-center text-[11px] tracking-[0.35em] text-white/45">
            THE TECH BEHIND YOUR PRODUCT
          </p>

          <h1 className="mx-auto max-w-[18ch] text-center text-4xl sm:text-6xl font-semibold tracking-[-0.02em] leading-[0.95]">
            Build, monetize, and scale your product with Next.js
          </h1>

          <p className="mx-auto mt-6 max-w-[60ch] text-center text-base sm:text-lg leading-relaxed text-white/60">
            A complete, customizable template with payments, SEO, and a modern UI
            — pay once, launch faster.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary button with subtle gradient stroke */}
            <a
              href="#pricing"
              className="group inline-flex w-full sm:w-auto rounded-[12px] p-[1px] bg-gradient-to-r from-white/25 via-white/10 to-white/25"
            >
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-white px-6 py-3 text-sm font-semibold text-black transition group-hover:opacity-95">
                Get Lifetime Access <span aria-hidden>→</span>
              </span>
            </a>

            <a
              href="#features"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:bg-white/[0.10]"
            >
              View Features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/55">
            <span className="inline-flex items-center gap-2 rounded-[999px] border border-white/10 bg-white/[0.06] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
              🎁 <span className="text-emerald-300">20% off</span>
            </span>
            <span>first 200 customers</span>
            <span className="rounded-[999px] bg-white/[0.08] px-2 py-1 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              3 left
            </span>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Multiple revenue streams", "Listings, featured spots, affiliates, ads."],
              ["SEO optimized", "Best practices so you rank higher."],
              ["Multi-language", "i18n ready with easy translations."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="group rounded-[16px] border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.09]"
              >
                <div className="mb-4 h-10 w-10 rounded-[10px] border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] sm:text-4xl">
            Frequently Asked Questions
          </h2>
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
                className="rounded-[14px] border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur open:bg-white/[0.09]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/85">
                  {q}
                  <span className="ml-4 rounded-[10px] border border-white/10 bg-white/[0.06] px-2 py-1 text-xs text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
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
