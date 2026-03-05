import Image from 'next/image';
import type { LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface PricingSectionProps {
  pricing: LandingContent['pricing'];
}

function PricingOfferSkeleton() {
  return (
    <div className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start flex-wrap text-sm text-secondary-foreground text-center px-2 py-1 bg-foreground/5 border rounded-lg mt-2">
      <div className="flex gap-x-1 gap-y-0.5 flex-row items-center place-content-start flex-wrap font-medium text-green-500/80 animate-pulse">
        <MarketingIcons.gift className="lucide lucide-gift" aria-hidden />
      </div>
      <span className="block animate-pulse rounded-md bg-foreground/15 w-32">&nbsp;</span>
    </div>
  );
}

function PricingBenefitSkeletonRow() {
  return (
    <div className="flex gap-x-3 gap-y-2 flex-row place-content-start items-start">
      <span className="block animate-pulse rounded-md bg-foreground/15 size-4">&nbsp;</span>
      <span className="block animate-pulse rounded-md bg-foreground/15 w-24 h-4">&nbsp;</span>
    </div>
  );
}

function PricingCardSkeleton() {
  return (
    <div className="flex flex-col gap-6 min-w-[90%] sm:min-w-92 flex-1 snap-center p-8 overflow-clip lg:min-w-0 lg:shrink not-first:border-l">
      <div className="flex flex-col items-start flex-wrap gap-6">
        <div className="flex gap-x-1 gap-y-0.5 flex-col items-start flex-wrap w-full">
          <h4 className="font-display font-medium text-pretty text-xl tracking-tight">
            <span className="block animate-pulse rounded-md bg-foreground/15 w-24">&nbsp;</span>
          </h4>
          <span className="block animate-pulse rounded-md bg-foreground/15 w-full h-5">&nbsp;</span>
        </div>

        <div className="relative flex items-baseline gap-0.5 h-12 text-muted-foreground opacity-75">
          <span className="text-2xl opacity-50">$</span>
          <span className="text-5xl font-medium tracking-tighter text-foreground">
            <span className="block animate-pulse rounded-md bg-foreground/15 w-24">&nbsp;</span>
          </span>
        </div>
      </div>

      <hr className="-mx-8" />

      <div className="flex gap-x-4 gap-y-3 flex-col items-start flex-wrap flex-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <PricingBenefitSkeletonRow key={index} />
        ))}
      </div>

      <span className="animate-pulse group/button inline-flex items-center justify-center font-medium text-start whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none bg-foreground/15 hover:bg-foreground/10 px-5 py-3 gap-[1ch] rounded-lg text-sm sm:text-base pointer-events-none text-muted-foreground">
        <span className="flex-1 truncate only:text-center has-[div]:contents">Buy now</span>
      </span>
    </div>
  );
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="w-full scroll-mt-8 py-fluid-lg" id="pricing">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col gap-y-4 items-center text-center">
          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[12px] -mb-2">
            {pricing.overline}
          </div>
          <h2 className="font-display font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
            {pricing.heading}
          </h2>
          <p className="text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85 max-w-2xl">
            {pricing.description}
          </p>

          <PricingOfferSkeleton />
        </div>

        <div className="flex gap-x-4 gap-y-3 flex-col flex-wrap items-center">
          <div className="flex flex-row items-stretch relative left-1/2 -translate-x-1/2 w-dvw overflow-x-auto snap-x snap-mandatory px-6 lg:static lg:translate-x-0 lg:w-full lg:overflow-clip lg:snap-none lg:px-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <PricingCardSkeleton key={index} />
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
