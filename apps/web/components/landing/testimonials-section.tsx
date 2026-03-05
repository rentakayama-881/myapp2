import Image from 'next/image';
import Link from 'next/link';
import type { LandingAction, LandingContent, LandingTestimonialItem } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface TestimonialsSectionProps {
  testimonials: LandingContent['testimonials'];
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

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const marqueeItems = [...testimonials.items, ...testimonials.items];

  return (
    <section className="w-full scroll-mt-8 light bg-white text-foreground py-fluid-lg" id="testimonials">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col gap-y-4 items-center text-center">
          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[12px] -mb-2">
            {testimonials.overline}
          </div>
          <h2 className="font-display font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85 max-w-2xl">
            {testimonials.description}
          </p>
          <Link
            href={testimonials.viewAllAction.href}
            className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium border [[href]]:hover:bg-foreground/5 mt-2"
            {...actionProps(testimonials.viewAllAction)}
          >
            {testimonials.viewAllAction.label}
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <div className="group overflow-clip mask-l-from-90% mask-r-from-90%">
            <div
              className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: '40s', animationDirection: 'normal' }}
            >
              {marqueeItems.map((item, index) => (
                <TestimonialCard key={`${item.name}-forward-${index}`} item={item} />
              ))}
            </div>
          </div>

          <div className="group overflow-clip mask-l-from-90% mask-r-from-90%">
            <div
              className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: '40s', animationDirection: 'reverse' }}
            >
              {marqueeItems.map((item, index) => (
                <TestimonialCard key={`${item.name}-reverse-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: LandingTestimonialItem }) {
  const quoteNode = (
    <blockquote className="pr-4 text-sm/normal text-secondary-foreground text-pretty">&quot;{item.quote}&quot;</blockquote>
  );

  return (
    <article className="flex flex-col gap-4 w-80 bg-foreground/5 rounded-xl p-6 shrink-0 dark:bg-foreground/10">
      <div className="flex items-center gap-1 -mb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <MarketingIcons.star
            key={index}
            className="lucide lucide-star size-3 fill-current text-yellow-500"
            aria-hidden
          />
        ))}
      </div>

      {item.quoteHref ? (
        <Link href={item.quoteHref} target="_blank" rel={item.quoteRel ?? 'noopener'}>
          {quoteNode}
        </Link>
      ) : (
        quoteNode
      )}

      <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap mt-auto">
        {item.avatar ? (
          <Image
            alt={item.name}
            loading="lazy"
            width="40"
            height="40"
            className="size-10 rounded-md bg-muted"
            src={item.avatar}
          />
        ) : null}

        <div className="text-sm text-start">
          <div className="font-medium">{item.name}</div>
          {item.sourceHref ? (
            <Link className="text-muted-foreground hover:text-foreground" href={item.sourceHref} target="_blank" rel="noopener">
              {item.source}
            </Link>
          ) : (
            <div className="text-muted-foreground">{item.source}</div>
          )}
        </div>
      </div>
    </article>
  );
}
