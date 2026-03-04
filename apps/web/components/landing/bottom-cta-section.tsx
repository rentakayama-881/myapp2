import Link from 'next/link';
import type { LandingContent } from '../../types/landing';

interface BottomCtaSectionProps {
  heading: LandingContent['bottomCta']['heading'];
  description: LandingContent['bottomCta']['description'];
  action: LandingContent['bottomCta']['action'];
}

export function BottomCtaSection({
  heading,
  description,
  action,
}: BottomCtaSectionProps) {
  return (
    <section className="landing-container py-16 md:py-20">
      <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Positioning sementara
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground">
          {description}
        </p>
        <div className="mt-8">
          <Link
            href={action.href}
            className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {action.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
