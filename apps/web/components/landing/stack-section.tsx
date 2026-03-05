import Image from 'next/image';
import type { LandingContent } from '../../types/landing';

interface StackSectionProps {
  stack: LandingContent['stack'];
}

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section className="w-full scroll-mt-8 light bg-white text-foreground py-fluid-lg">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex w-full flex-col gap-y-4 items-center text-center">
          <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[12px] -mb-2">
            {stack.overline}
          </div>
          <h2 className="font-display font-medium text-pretty text-3xl tracking-tighter md:text-4xl">
            {stack.heading}
          </h2>
        </div>

        <div className="w-full flex flex-wrap gap-x-12 gap-y-6 items-center justify-center lg:gap-x-16">
          {stack.items.map((item) => (
            <Image
              key={item.label}
              alt={item.label}
              data-state="closed"
              loading="lazy"
              width={item.width}
              height={item.height}
              className="w-auto opacity-35 duration-150 max-sm:scale-75 max-lg:scale-90 hover:opacity-100"
              style={{ height: `${item.height}px` }}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
