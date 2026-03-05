'use client';

import { useState } from 'react';
import type { LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface FaqSectionProps {
  faq: LandingContent['faq'];
}

export function FaqSection({ faq }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full scroll-mt-8 py-fluid-lg pt-fluid-sm" id="faq">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col gap-y-4 items-center text-center">
          <h2 className="font-display font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
            {faq.heading}
          </h2>
          <p className="text-pretty text-secondary-foreground [word-break:break-word] md:text-lg [&_a]:font-semibold [&_a]:text-foreground [&_a]:hover:text-foreground/85 max-w-2xl">
            {faq.description}
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col gap-2 p-2 bg-card rounded-xl" data-orientation="vertical">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const state = isOpen ? 'open' : 'closed';
            const triggerId = `faq-trigger-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div key={item.question} data-state={state} data-orientation="vertical" className="bg-background rounded-lg">
                <button
                  type="button"
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  data-state={state}
                  data-orientation="vertical"
                  id={triggerId}
                  className="group flex items-start justify-between w-full gap-4 py-2.5 px-4 text-start text-secondary-foreground duration-100 hover:text-foreground data-[state=open]:text-foreground"
                  data-radix-collection-item=""
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  <h4 className="font-medium">{item.question}</h4>
                  <MarketingIcons.plus
                    className="lucide lucide-plus size-5 mt-0.5 shrink-0 duration-200 text-secondary-foreground group-data-[state=open]:rotate-45"
                    aria-hidden
                  />
                </button>

                <div className="overflow-clip">
                  <div className="h-max">
                    <div
                      data-state={state}
                      id={contentId}
                      hidden={!isOpen}
                      role="region"
                      aria-labelledby={triggerId}
                      data-orientation="vertical"
                      className="animate-fade-in overflow-clip"
                    >
                      <p
                        className="px-4 pb-4 text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-2"
                        dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                      />
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
