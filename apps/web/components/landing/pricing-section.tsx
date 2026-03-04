import Link from 'next/link';
import type { LandingAction, LandingContent, LandingPricingTier } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface PricingSectionProps {
  pricing: LandingContent['pricing'];
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

function PricingCard({ tier }: { tier: LandingPricingTier }) {
  return (
    <div
      className={[
        'flex flex-col gap-6 min-w-[95%] sm:min-w-92 flex-1 snap-center p-6 overflow-clip first:rounded-s-xl last:rounded-e-xl md:p-8 lg:min-w-0 lg:shrink',
        tier.highlighted
          ? 'relative z-10 -mx-px bg-primary/15 ring ring-inset ring-primary/50 lg:basis-[55%]'
          : 'ring ring-inset ring-border lg:basis-[45%]',
      ].join(' ')}
    >
      <div className="flex flex-col flex-wrap items-start gap-6">
        <div className="flex w-full flex-col flex-wrap items-start gap-x-1 gap-y-0.5">
          <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 place-content-start">
            <h4 className="text-pretty text-xl font-medium tracking-tight">{tier.name}</h4>
            {tier.badge ? (
              <div className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wider text-primary-foreground uppercase">
                {tier.badge}
              </div>
            ) : null}
          </div>
          <p className="text-balance text-foreground/50">{tier.description}</p>
        </div>

        <div className="relative flex h-14 items-baseline gap-0.5 text-muted-foreground">
          {tier.note ? <span className="absolute -top-3.5 left-0 text-xs">{tier.note}</span> : null}
          <span className="text-2xl">$</span>
          <span className="relative">
            <span className="text-6xl font-medium tracking-tighter text-foreground">
              {tier.priceLabel}
            </span>
            {tier.strikeLabel ? (
              <span className="absolute -top-[0.25em] left-full ml-2 text-lg font-normal before:absolute before:-inset-x-0.5 before:top-1/2 before:h-[0.075em] before:-rotate-10 before:bg-red-500/75">
                {tier.strikeLabel}
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <hr className="-mx-8" />

      <div className="flex flex-1 flex-col flex-wrap items-start gap-x-4 gap-y-3">
        {tier.benefits.map((benefit) => (
          <div key={benefit} className="flex flex-row items-start gap-x-3 gap-y-2 place-content-start">
            <span className="size-4 rounded-md bg-foreground/15" />
            <span className="-mt-0.5 flex-1 text-sm text-secondary-foreground">{benefit}</span>
          </div>
        ))}
      </div>

      <Link
        href={tier.cta.href}
        className={[
          'group/button inline-flex items-center justify-center gap-[1ch] rounded-lg px-5 py-3 text-sm font-medium text-start whitespace-nowrap hover:z-10 sm:text-base disabled:pointer-events-none disabled:opacity-60',
          tier.highlighted
            ? 'bg-primary text-primary-foreground hover:opacity-85'
            : 'bg-foreground text-background hover:opacity-85',
        ].join(' ')}
        {...actionProps(tier.cta)}
      >
        <span className="flex-1 truncate only:text-center has-[div]:contents">{tier.cta.label}</span>
      </Link>
    </div>
  );
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="w-full scroll-mt-8 py-fluid-lg" id="pricing">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <div className="-mb-2 text-[12px] font-medium text-foreground/50 uppercase tracking-wider">
            {pricing.overline}
          </div>
          <h2 className="text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {pricing.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-secondary-foreground [word-break:break-word] md:text-lg">
            {pricing.description}
          </p>

          <div className="mt-2 flex flex-row flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border bg-foreground/5 px-2 py-1 text-center text-sm text-secondary-foreground">
            <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-0.5 font-medium text-green-500/80 animate-pulse">
              <MarketingIcons.gift className="size-4" aria-hidden />
            </div>
            <span>{pricing.offerBadge}</span>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center gap-x-4 gap-y-3">
          <div className="relative left-1/2 flex w-dvw -translate-x-1/2 snap-x snap-mandatory flex-row items-stretch overflow-x-auto px-6 lg:static lg:w-full lg:translate-x-0 lg:overflow-clip lg:px-0 lg:snap-none">
            {pricing.tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
