import Link from 'next/link';
import type { LandingAction, LandingContent } from '../../types/landing';
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
  return (
    <section className="light w-full scroll-mt-8 bg-white py-fluid-lg text-foreground" id="testimonials">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <h2 className="text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-secondary-foreground [word-break:break-word] md:text-lg">
            {testimonials.description}
          </p>
          <Link
            href={testimonials.viewAllAction.href}
            className="mt-2 inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-xs font-medium hover:bg-foreground/5"
            {...actionProps(testimonials.viewAllAction)}
          >
            {testimonials.viewAllAction.label}
          </Link>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex w-80 shrink-0 snap-center flex-col rounded-xl border bg-background p-6"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <MarketingIcons.star
                    key={index}
                    className="size-3 fill-current text-yellow-500"
                    aria-hidden
                  />
                ))}
              </div>

              <blockquote className="mt-3 pr-4 text-pretty text-sm leading-normal text-secondary-foreground">
                “{item.quote}”
              </blockquote>

              <div className="mt-auto flex flex-row flex-wrap items-center gap-x-3 gap-y-2 place-content-start pt-4">
                <div className="size-10 rounded-md bg-muted" />
                <div className="text-sm text-start">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-muted-foreground">{item.role}</div>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{item.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
