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
      rel: action.rel ?? 'noopener',
    } as const;
  }

  return {};
}

export function QuoteStrip({ quoteStrip }: QuoteStripProps) {
  return (
    <section className="w-full scroll-mt-8 py-fluid-sm -mt-4 mb-8" id="quote">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center text-center gap-6 max-w-xl mx-auto">
          <blockquote className="text-center text-lg/relaxed text-pretty">{quoteStrip.text}</blockquote>

          <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap">
            <Image
              alt={quoteStrip.authorName}
              loading="lazy"
              width="40"
              height="40"
              className="size-10 rounded-md bg-muted"
              src={quoteStrip.authorAvatar}
            />

            <div className="text-sm text-start">
              <div className="font-medium">{quoteStrip.authorName}</div>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href={quoteStrip.sourceHref}
                {...actionProps({
                  label: quoteStrip.sourceLabel,
                  href: quoteStrip.sourceHref,
                  external: true,
                  rel: 'noopener',
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
