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
    <div className="flex gap-x-3 gap-y-2 flex-col flex-wrap items-start text-start min-h-48 p-6 border-l sm:justify-end">
      <FeatureIcon
        name={item.icon}
        className={`lucide lucide-${item.icon} p-3 mb-1 border rounded-xl text-muted-foreground size-12`}
        aria-hidden
      />
      <h4 className="font-display font-medium text-pretty text-xl tracking-tight relative">
        <span className="absolute -left-6 -ml-0.5 w-0.75 h-7 bg-foreground rounded-full" />
        {item.title}
      </h4>
      <p className="max-w-xs text-sm text-muted-foreground">{item.description}</p>
    </div>
  );
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  const mobileColumns = chunkFeatures(features.items, 3);

  return (
    <section className="w-full scroll-mt-8 light bg-background text-foreground py-fluid-lg" id="features">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col gap-y-4 items-center text-center">
          <h2 className="font-display font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
            {features.heading}
          </h2>
          <p className="max-w-[42.5em] text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85">
            {features.description}
          </p>
        </div>

        <div className="flex w-full overflow-x-auto snap-x snap-mandatory pl-0.5 sm:hidden">
          {mobileColumns.map((column, index) => (
            <div key={index} className="flex flex-col w-[85%] shrink-0 snap-center">
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
