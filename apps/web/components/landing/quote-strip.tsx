import Link from 'next/link';
import type { LandingAction, LandingContent } from '../../types/landing';

interface QuoteStripProps {
  quoteStrip: LandingContent['quoteStrip'];
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

export function QuoteStrip({ quoteStrip }: QuoteStripProps) {
  return (
    <section className="w-full scroll-mt-8 -mt-4 mb-8 py-fluid-sm" id="quote">
      <div className="container">
        <div className="rounded-xl border bg-foreground/5 p-6">
          <blockquote className="pr-4 text-pretty text-sm leading-normal text-secondary-foreground">
            {quoteStrip.text}
          </blockquote>
          <div className="mt-3 text-sm">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={quoteStrip.sourceHref}
              {...actionProps({
                label: quoteStrip.sourceLabel,
                href: quoteStrip.sourceHref,
              })}
            >
              {quoteStrip.sourceLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
