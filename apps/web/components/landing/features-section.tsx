import { MarketingIcon } from '../icons/marketing-icons';
import type { LandingFeature } from '../../types/landing';

interface FeaturesSectionProps {
  features: LandingFeature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="border-b border-border/60 bg-card/30">
      <div className="landing-container py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Fondasi validasi AI yang bisa kamu kembangkan
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Struktur sementara ini sengaja modular agar konten dan komponen bisa kamu edit cepat tanpa bongkar layout.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-background p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.5)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                <MarketingIcon name={feature.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
