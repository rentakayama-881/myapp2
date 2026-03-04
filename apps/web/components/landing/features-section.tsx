import type { LandingContent, LandingFeatureItem } from '../../types/landing';
import { FeatureIcon } from '../icons/marketing-icons';

interface FeaturesSectionProps {
  features: LandingContent['features'];
}

function chunkFeatures(items: LandingFeatureItem[], size: number) {
  const chunks: LandingFeatureItem[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function FeatureBlock({ item }: { item: LandingFeatureItem }) {
  return (
    <div className="flex min-h-48 flex-col flex-wrap items-start gap-x-3 gap-y-2 border-l p-6 text-start sm:justify-end">
      <FeatureIcon
        name={item.icon}
        className="mb-1 size-12 rounded-xl border p-3 text-muted-foreground"
        aria-hidden
      />
      <h4 className="font-display relative text-pretty text-xl font-medium tracking-tight">
        <span className="absolute -left-6 -ml-0.5 h-7 w-0.75 rounded-full bg-foreground" />
        {item.title}
      </h4>
      <p className="max-w-xs text-sm text-muted-foreground">{item.description}</p>
    </div>
  );
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  const mobileColumns = chunkFeatures(features.items, 3);

  return (
    <section className="light w-full scroll-mt-8 bg-background py-fluid-lg text-foreground" id="features">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <h2 className="font-display text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {features.heading}
          </h2>
          <p className="max-w-[42.5em] text-pretty text-secondary-foreground [word-break:break-word] md:text-lg">
            {features.description}
          </p>
        </div>

        <div className="flex w-full snap-x snap-mandatory overflow-x-auto pl-0.5 sm:hidden">
          {mobileColumns.map((column, index) => (
            <div
              key={index}
              className="flex w-[85%] shrink-0 snap-center flex-col"
            >
              {column.map((item) => (
                <FeatureBlock key={item.title} item={item} />
              ))}
            </div>
          ))}
        </div>

        <div className="hidden w-full sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <FeatureBlock key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
