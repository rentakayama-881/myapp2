import Link from 'next/link';
import type { LandingAction, LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface BottomCtaSectionProps {
  bottomCta: LandingContent['bottomCta'];
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

export function BottomCtaSection({ bottomCta }: BottomCtaSectionProps) {
  return (
    <section className="group relative grid min-h-96 w-full scroll-mt-8 place-items-center overflow-clip bg-gradient py-fluid-sm">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[11px] -mb-2">
            {bottomCta.overline}
          </div>
          <h2 className="font-display text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {bottomCta.heading}
          </h2>
          <p className="max-w-[42.5em] text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85">
            {bottomCta.description}
          </p>

          <Link
            href={bottomCta.action.href}
            className="group/button mt-4 inline-flex items-center justify-center gap-[1ch] rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background text-start whitespace-nowrap hover:z-10 hover:opacity-85 sm:text-base disabled:pointer-events-none disabled:opacity-60"
            {...actionProps(bottomCta.action)}
          >
            <span className="flex-1 truncate only:text-center has-[div]:contents">
              {bottomCta.action.label}
            </span>
            <MarketingIcons.arrowUpRight
              className="shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] opacity-75 lucide lucide-arrow-up-right"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
