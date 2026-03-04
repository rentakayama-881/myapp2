import Image from 'next/image';
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
      <div className="container flex flex-col gap-fluid-sm">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 text-center">
          <blockquote className="text-pretty text-center text-lg/relaxed">
            {quoteStrip.text}
          </blockquote>

          <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 place-content-start">
            <Image
              alt={quoteStrip.authorName}
              loading="lazy"
              width="40"
              height="40"
              className="size-10 rounded-md bg-muted"
              src={quoteStrip.authorAvatar}
            />

            <div className="text-start text-sm">
              <div className="font-medium">{quoteStrip.authorName}</div>

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
      </div>
    </section>
  );
}
