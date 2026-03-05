import Image from 'next/image';
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
      rel: action.rel ?? 'noopener',
    } as const;
  }

  return {};
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="w-full scroll-mt-8 py-fluid-lg">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col gap-y-4 items-center text-center">
          <Link
            className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[12px] -mb-2"
            href="#"
          >
            {hero.overline}
          </Link>

          <h1 className="font-display font-medium text-pretty text-4xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-[13em]">
            {hero.heading}
          </h1>

          <p className="text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85 max-w-[40em]">
            {hero.subheading}
          </p>

          <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap justify-center mt-6">
            <Link
              href={hero.primaryAction.href}
              className="group/button inline-flex items-center justify-center font-medium text-start whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none relative text-background animate-rainbow hover:opacity-85 bg-[linear-gradient(var(--color-foreground),var(--color-foreground)),linear-gradient(var(--color-background)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(0.75rem)] py-3 gap-[1ch] rounded-lg text-sm sm:text-base px-6 lg:px-8 lg:py-4 md:min-w-64"
              {...actionProps(hero.primaryAction)}
            >
              <MarketingIcons.brandMark
                className="shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] opacity-75 h-5 w-auto fill-current"
                aria-hidden
              />
              <span className="flex-1 truncate only:text-center has-[div]:contents">{hero.primaryAction.label}</span>
            </Link>
          </div>

          <div className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start flex-wrap text-sm text-secondary-foreground text-center">
            <div className="flex gap-x-1 gap-y-0.5 flex-row items-center place-content-start flex-wrap font-medium text-green-500/80 animate-pulse">
              <MarketingIcons.gift className="lucide lucide-gift" aria-hidden />
              {hero.promo.discountLabel}
            </div>
            <span className="text-muted-foreground/75 text-xs">{hero.promo.divider}</span>
            {hero.promo.audienceLabel}{' '}
            <span className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium bg-foreground/20 [[href]]:hover:bg-foreground/15">
              {hero.promo.counterValue} {hero.promo.counterSuffix}
            </span>
          </div>

          <p className="text-xs text-muted-foreground">{hero.promo.guaranteeLabel}</p>
        </div>

        <div className="relative isolate mt-4 -mb-fluid-lg px-2">
          <div className="flex flex-wrap items-center justify-center text-center gap-y-1 mt-2 -space-x-1.5 absolute z-20 bottom-6 left-1/2 -translate-x-1/2">
            {hero.customerAvatars.map((avatarSrc, index) => (
              <Image
                key={avatarSrc}
                alt=""
                loading="lazy"
                width="24"
                height="24"
                className="size-7 border-[2px] border-background rounded-full"
                src={avatarSrc}
                data-avatar={index + 1}
              />
            ))}

            <div className="flex gap-x-2 gap-y-1 flex-col items-start flex-wrap ml-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <MarketingIcons.star
                    key={index}
                    className="lucide lucide-star size-3 fill-current text-yellow-500"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-xs/none text-muted-foreground">{hero.socialProofLabel}</p>
            </div>
          </div>

          <Image
            alt={hero.mediaAlt}
            loading="lazy"
            width="2560"
            height="1440"
            className="w-full max-h-96 aspect-2-1 object-cover object-top rounded-t-xl ring-8 ring-foreground/10 select-none opacity-90 md:rounded-t-2xl"
            src="/dashboard-dark.webp"
          />
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent from-50% to-background/75" />
        </div>
      </div>
    </section>
  );
}
