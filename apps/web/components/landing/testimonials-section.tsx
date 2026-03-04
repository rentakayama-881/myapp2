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
      rel: 'noopener',
    } as const;
  }

  return {};
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const marqueeItems = [...testimonials.items, ...testimonials.items];

  return (
    <section className="light w-full scroll-mt-8 bg-white py-fluid-lg text-foreground" id="testimonials">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[12px] -mb-2">
            {testimonials.overline}
          </div>
          <h2 className="font-display text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85">
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
              className="group-hover:[animation-play-state:paused] flex w-max gap-6 animate-marquee"
              style={{ animationDuration: '40s', animationDirection: 'normal' }}
            >
              {marqueeItems.map((item, index) => (
                <TestimonialCard key={`${item.name}-forward-${index}`} item={item} />
              ))}
            </div>
          </div>

          <div className="group overflow-clip mask-l-from-90% mask-r-from-90%">
            <div
              className="group-hover:[animation-play-state:paused] flex w-max gap-6 animate-marquee"
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
  return (
    <article className="dark:bg-foreground/10 flex w-80 shrink-0 flex-col gap-4 rounded-xl bg-foreground/5 p-6">
      <div className="flex items-center gap-1 -mb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <MarketingIcons.star
            key={index}
            className="lucide lucide-star size-3 fill-current text-yellow-500"
            aria-hidden
          />
        ))}
      </div>

      <blockquote className="pr-4 text-pretty text-sm/normal text-secondary-foreground">“{item.quote}”</blockquote>

      <div className="mt-auto flex flex-row flex-wrap items-center gap-x-3 gap-y-2 place-content-start">
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

        <div className="text-start text-sm">
          <div className="font-medium">{item.name}</div>
          {item.sourceHref ? (
            <Link className="text-muted-foreground hover:text-foreground" href={item.sourceHref}>
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
