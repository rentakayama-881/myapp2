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
          <h2 className="font-display text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {faq.heading}
          </h2>
          <p className="max-w-2xl text-pretty text-secondary-foreground [word-break:break-word] md:text-lg">
            {faq.description}
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 rounded-xl bg-card p-2">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const state = isOpen ? 'open' : 'closed';

            return (
              <div
                key={item.question}
                className="rounded-lg bg-background"
                data-orientation="vertical"
                data-state={state}
              >
                <button
                  type="button"
                  className="group flex w-full items-start justify-between gap-4 px-4 py-2.5 text-secondary-foreground text-start duration-100 hover:text-foreground data-[state=open]:text-foreground"
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  aria-expanded={isOpen}
                  data-orientation="vertical"
                  data-state={state}
                >
                  <h4 className="font-medium">{item.question}</h4>
                  <MarketingIcons.plus
                    className={[
                      'lucide lucide-plus mt-0.5 size-5 shrink-0 text-secondary-foreground duration-200',
                      isOpen ? 'rotate-45' : '',
                    ].join(' ')}
                    aria-hidden
                  />
                </button>

                <div className="overflow-clip">
                  <div className="h-max">
                    <div
                      className={[
                        'animate-fade-in overflow-clip',
                        isOpen ? 'block' : 'hidden',
                      ].join(' ')}
                      role="region"
                    >
                      <p className="px-4 pb-4 text-sm text-muted-foreground">{item.answer}</p>
                    </div>
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
