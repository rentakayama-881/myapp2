import Image from 'next/image';
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

type PricingBenefitIcon =
  | 'package-open'
  | 'lock'
  | 'brain'
  | 'bot'
  | 'pen-tool'
  | 'brush'
  | 'life-buoy'
  | 'headphones'
  | 'wrench'
  | 'code'
  | 'globe'
  | 'settings'
  | 'sparkles';

const TIER_ICON_MAP: PricingBenefitIcon[][] = [
  ['package-open', 'lock', 'brain', 'bot', 'pen-tool'],
  ['brush', 'life-buoy', 'headphones', 'wrench', 'code'],
  ['globe', 'settings', 'sparkles', 'package-open', 'lock'],
];

const FALLBACK_ICON_SET: PricingBenefitIcon[] = ['sparkles'];

function benefitIcon(tierIndex: number, benefitIndex: number): PricingBenefitIcon {
  const set = TIER_ICON_MAP[tierIndex] ?? TIER_ICON_MAP[0] ?? FALLBACK_ICON_SET;
  return set[benefitIndex % set.length] ?? 'sparkles';
}

function PricingBenefitIconNode({ name }: { name: PricingBenefitIcon }) {
  switch (name) {
    case 'package-open':
      return <MarketingIcons.packageOpen className="lucide lucide-package-open" aria-hidden />;
    case 'lock':
      return <MarketingIcons.lock className="lucide lucide-lock" aria-hidden />;
    case 'brain':
      return <MarketingIcons.brain className="lucide lucide-brain" aria-hidden />;
    case 'bot':
      return <MarketingIcons.bot className="lucide lucide-bot" aria-hidden />;
    case 'pen-tool':
      return <MarketingIcons.penTool className="lucide lucide-pen-tool" aria-hidden />;
    case 'brush':
      return <MarketingIcons.brush className="lucide lucide-brush" aria-hidden />;
    case 'life-buoy':
      return <MarketingIcons.lifeBuoy className="lucide lucide-life-buoy" aria-hidden />;
    case 'headphones':
      return <MarketingIcons.headphones className="lucide lucide-headphones" aria-hidden />;
    case 'wrench':
      return <MarketingIcons.wrench className="lucide lucide-wrench" aria-hidden />;
    case 'code':
      return <MarketingIcons.code className="lucide lucide-code" aria-hidden />;
    case 'globe':
      return <MarketingIcons.globe className="lucide lucide-globe" aria-hidden />;
    case 'settings':
      return <MarketingIcons.settings className="lucide lucide-settings" aria-hidden />;
    case 'sparkles':
      return <MarketingIcons.sparkles className="lucide lucide-sparkles" aria-hidden />;
    default:
      return <MarketingIcons.sparkles className="lucide lucide-sparkles" aria-hidden />;
  }
}

function PricingCard({
  tier,
  tierIndex,
}: {
  tier: LandingPricingTier;
  tierIndex: number;
}) {
  return (
    <div
      className={[
        'flex flex-col gap-6 min-w-[95%] sm:min-w-92 flex-1 snap-center p-6 overflow-clip first:rounded-s-xl last:rounded-e-xl md:p-8 lg:min-w-0 lg:shrink ring ring-inset ring-border not-first:border-l',
        tier.highlighted ? 'lg:basis-[55%]' : 'lg:basis-[45%]',
      ].join(' ')}
    >
      <div className="flex flex-col items-start flex-wrap gap-6">
        <div className="flex gap-x-1 gap-y-0.5 flex-col items-start flex-wrap">
          <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap">
            <h4 className="font-display font-medium text-pretty text-xl tracking-tight">{tier.name}</h4>
            {tier.badge ? (
              <div className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium bg-foreground/20 [[href]]:hover:bg-foreground/15">
                {tier.badge}
              </div>
            ) : null}
          </div>
          <p className="text-foreground/50 text-balance">{tier.description}</p>
        </div>

        <div className="relative flex items-baseline gap-0.5 h-14 text-muted-foreground">
          {tier.note ? <span className="text-xs text-muted-foreground absolute -top-4 left-0">{tier.note}</span> : null}
          <span className="text-2xl">$</span>
          <span className="relative">
            <span className="text-6xl font-medium tracking-tighter text-foreground">{tier.priceLabel}</span>
            {tier.strikeLabel ? (
              <span className="absolute -top-[0.25em] left-full ml-2 text-lg font-normal before:absolute before:-inset-x-0.5 before:top-1/2 before:h-[0.075em] before:-rotate-10 before:bg-red-500/75">
                {tier.strikeLabel}
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <hr className="-mx-8" />

      <div className="flex gap-x-4 gap-y-3 flex-col items-start flex-wrap flex-1">
        {tier.benefits.map((benefit, index) => (
          <div key={benefit} className="flex gap-x-3 gap-y-2 flex-row place-content-start items-start">
            <PricingBenefitIconNode name={benefitIcon(tierIndex, index)} />
            <span className="-mt-0.5 flex-1 text-sm text-secondary-foreground">{benefit}</span>
          </div>
        ))}
      </div>

      <Link
        href={tier.cta.href}
        className="group/button inline-flex items-center justify-center font-medium text-start whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none text-background bg-foreground hover:opacity-85 px-5 py-3 gap-[1ch] rounded-lg text-sm sm:text-base"
        {...actionProps(tier.cta)}
      >
        <span className="flex-1 truncate only:text-center has-[div]:contents">{tier.cta.label}</span>
        <MarketingIcons.arrowRight
          className="shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] opacity-75 lucide lucide-arrow-right"
          aria-hidden
        />
      </Link>
    </div>
  );
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="w-full scroll-mt-8 py-fluid-lg" id="pricing">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[12px] -mb-2">
            {pricing.overline}
          </div>
          <h2 className="font-display font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
            {pricing.heading}
          </h2>
          <p className="text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85 max-w-2xl">
            {pricing.description}
          </p>

          <div className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start flex-wrap text-sm text-secondary-foreground text-center px-2 py-1 bg-foreground/5 border rounded-lg mt-2">
            <div className="flex gap-x-1 gap-y-0.5 flex-row items-center place-content-start flex-wrap font-medium text-green-500/80 animate-pulse">
              <MarketingIcons.gift className="lucide lucide-gift" aria-hidden />
              {pricing.offerBadge}
            </div>
            <span className="text-muted-foreground/75 text-xs">{pricing.offerDivider}</span>
            {pricing.offerCounterLabel}{' '}
            <span className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium bg-foreground/20 [[href]]:hover:bg-foreground/15">
              {pricing.offerCounterValue}
            </span>
          </div>
        </div>

        <div className="flex gap-x-4 gap-y-3 flex-col flex-wrap items-center">
          <div className="flex flex-row items-stretch relative left-1/2 -translate-x-1/2 w-dvw overflow-x-auto snap-x snap-mandatory px-6 lg:static lg:translate-x-0 lg:w-full lg:overflow-clip lg:snap-none lg:px-0">
            {pricing.tiers.map((tier, tierIndex) => (
              <PricingCard key={tier.name} tier={tier} tierIndex={tierIndex} />
            ))}
          </div>

          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[11px] text-center">
            {pricing.legalNote}
          </div>

          <div className="flex flex-wrap items-center justify-center text-center gap-y-1 mt-2 -space-x-1.5">
            {pricing.customerAvatars.map((avatarSrc, index) => (
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
              <p className="text-xs/none text-muted-foreground">{pricing.socialProofLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
