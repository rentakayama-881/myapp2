import Link from 'next/link';
import type { LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';
import { landingTypography } from './landing-typography';

interface TopNavProps {
  brandName: LandingContent['brandName'];
  brandTagline: LandingContent['brandTagline'];
  primaryAction: LandingContent['topNavActions']['primary'];
  secondaryAction: LandingContent['topNavActions']['secondary'];
}

export function TopNav({
  brandName,
  brandTagline,
  primaryAction,
  secondaryAction,
}: TopNavProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="landing-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={brandName}>
          <span className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm">
            <MarketingIcons.brandMark className="size-5" />
          </span>
          <span className="grid leading-tight">
            <span className={landingTypography.label + ' tracking-tight text-foreground'}>
              {brandName}
            </span>
            <span className={landingTypography.caption}>{brandTagline}</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href={primaryAction.href}
            className={
              'inline-flex h-9 items-center rounded-lg border border-border bg-card px-3 transition hover:bg-muted ' +
              landingTypography.label +
              ' text-foreground'
            }
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className={
              'inline-flex h-9 items-center rounded-lg bg-primary px-3 transition hover:opacity-90 ' +
              landingTypography.label +
              ' text-primary-foreground'
            }
          >
            {secondaryAction.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
