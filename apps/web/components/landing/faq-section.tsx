'use client';

import { useState } from 'react';
import type { LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface FaqSectionProps {
  faq: LandingContent['faq'];
}

export function FaqSection({ faq }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full scroll-mt-8 pt-fluid-sm py-fluid-lg" id="faq">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <h2 className="text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {faq.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-secondary-foreground [word-break:break-word] md:text-lg">
            {faq.description}
          </p>
        </div>

        <div className="w-full divide-y rounded-xl border">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="bg-background">
                <button
                  type="button"
                  className="group flex w-full items-start justify-between gap-4 px-4 py-2.5 text-secondary-foreground text-start duration-100 hover:text-foreground"
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  aria-expanded={isOpen}
                >
                  <h4 className="font-medium">{item.question}</h4>
                  <span
                    className={[
                      'mt-0.5 inline-flex size-5 items-center justify-center rounded-md border text-muted-foreground transition-transform duration-150',
                      isOpen ? 'rotate-45 text-foreground' : '',
                    ].join(' ')}
                  >
                    <MarketingIcons.plus className="size-3" aria-hidden />
                  </span>
                </button>

                <div
                  className={[
                    'grid overflow-hidden transition-all duration-200',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
