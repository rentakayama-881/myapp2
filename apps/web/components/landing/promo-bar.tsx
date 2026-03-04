import type { LandingContent } from '../../types/landing';

interface PromoBarProps {
  promoBar: LandingContent['promoBar'];
}

export function PromoBar({ promoBar }: PromoBarProps) {
  return (
    <div className="relative z-50 bg-gradient">
      <div className="container py-3">
        <div className="flex items-center justify-start gap-x-2 text-sm">
          <span className="font-medium">🎉 {promoBar.heading}</span>
          <span className="max-sm:hidden opacity-85">
            {promoBar.codePrefix}{' '}
            <span className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-xs font-medium bg-foreground/20 [[href]]:hover:bg-foreground/15">
              {promoBar.code}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
