import Link from 'next/link';
import type { LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';
import { landingTypography } from './landing-typography';

interface HeroSectionProps {
  heading: LandingContent['hero']['heading'];
  subheading: LandingContent['hero']['subheading'];
  primaryAction: LandingContent['hero']['primaryAction'];
  secondaryAction: LandingContent['hero']['secondaryAction'];
}

export function HeroSection({
  heading,
  subheading,
  primaryAction,
  secondaryAction,
}: HeroSectionProps) {
  return (
    <section className="hero-shell border-b border-border/60">
      <div className="landing-container py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`mb-5 inline-flex rounded-full border border-border bg-card px-3 py-1 ${landingTypography.overline}`}
          >
            Validasi output AI sebelum dipakai untuk keputusan penting
          </p>
          <h1
            className={`text-balance text-foreground ${landingTypography.display}`}
          >
            {heading}
          </h1>
          <p
            className={`mx-auto mt-6 max-w-3xl text-pretty ${landingTypography.body}`}
          >
            {subheading}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryAction.href}
              className={`inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-primary-foreground transition hover:opacity-90 ${landingTypography.cta}`}
            >
              {primaryAction.label}
              <MarketingIcons.arrowRight className="size-4" />
            </Link>
            <Link
              href={secondaryAction.href}
              className={`inline-flex h-11 items-center rounded-lg border border-border bg-card px-5 text-foreground transition hover:bg-muted ${landingTypography.cta}`}
            >
              {secondaryAction.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
