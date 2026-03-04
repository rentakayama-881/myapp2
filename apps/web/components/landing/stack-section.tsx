import type { LandingContent } from '../../types/landing';

interface StackSectionProps {
  stack: LandingContent['stack'];
}

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section className="light w-full scroll-mt-8 bg-white py-fluid-lg text-foreground">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col items-center gap-y-4 text-center">
          <div className="-mb-2 text-[12px] font-medium text-foreground/50 uppercase tracking-wider">
            {stack.overline}
          </div>
          <h2 className="text-pretty text-3xl font-medium tracking-tighter md:text-4xl">
            {stack.heading}
          </h2>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-16">
          {stack.items.map((item) => (
            <div
              key={item.label}
              className="w-auto opacity-35 duration-150 hover:opacity-100 max-sm:scale-75 max-lg:scale-90"
            >
              <span className="text-sm font-medium tracking-wide text-foreground/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
