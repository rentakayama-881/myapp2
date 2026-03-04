import Link from 'next/link';
import type { LandingAction, LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface HeroSectionProps {
  hero: LandingContent['hero'];
}

function actionProps(action: LandingAction) {
  if (action.external) {
    return {
      target: '_blank',
      rel: 'noopener',
    } as const;
  }

  return {};
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="w-full scroll-mt-8 py-fluid-lg">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <p className="-mb-2 font-mono text-[12px] font-medium tracking-wider text-foreground/50 uppercase">
            {hero.overline}
          </p>
          <h1 className="max-w-[13em] text-pretty text-4xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="max-w-[40em] text-pretty text-secondary-foreground [word-break:break-word] md:text-lg">
            {hero.subheading}
          </p>

          <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 place-content-start">
            <Link
              href={hero.primaryAction.href}
              className="group/button animate-rainbow relative inline-flex items-center justify-center gap-[1ch] rounded-lg bg-[length:200%] bg-[linear-gradient(var(--color-foreground),var(--color-foreground)),linear-gradient(var(--color-background)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] px-6 py-3 text-sm font-medium text-background text-start whitespace-nowrap [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(0.75rem)] hover:z-10 hover:opacity-85 sm:text-base lg:px-8 lg:py-4"
              {...actionProps(hero.primaryAction)}
            >
              <MarketingIcons.brandMark
                className="h-5 w-auto shrink-0 fill-current opacity-75 first:-ml-[0.21425em] last:-mr-[0.21425em]"
                aria-hidden
              />
              <span className="flex-1 truncate only:text-center has-[div]:contents">
                {hero.primaryAction.label}
              </span>
            </Link>
          </div>

          <div className="mt-2 flex flex-row flex-wrap items-center gap-x-2 gap-y-1 place-content-start text-center text-sm text-secondary-foreground">
            <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-0.5 place-content-start font-medium text-green-500/80 animate-pulse">
              <MarketingIcons.gift className="size-4" aria-hidden />
              <span>{hero.trustBadge}</span>
            </div>
            <span className="text-xs text-muted-foreground/75">/</span>
            <span>
              {hero.trustText}{' '}
              <span className="inline-flex items-center rounded-md bg-foreground/15 px-2 py-0.5 font-mono text-xs font-medium">
                {hero.trustCounter}
              </span>
            </span>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-1 place-content-start text-sm text-secondary-foreground">
            <div className="flex flex-row flex-wrap items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <MarketingIcons.star
                  key={index}
                  className="size-3 fill-current text-yellow-500"
                  aria-hidden
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">200+ happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
