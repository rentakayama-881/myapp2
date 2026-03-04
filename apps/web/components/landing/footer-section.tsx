import Link from 'next/link';
import type { LandingAction, LandingContent } from '../../types/landing';
import { MarketingIcons, SocialIcon } from '../icons/marketing-icons';

interface FooterSectionProps {
  brandName: LandingContent['brandName'];
  footer: LandingContent['footer'];
}

function actionProps(action: LandingAction) {
  if (action.external) {
    return {
      target: '_blank',
      rel: 'noopener nofollow',
    } as const;
  }

  return {};
}

export function FooterSection({ brandName, footer }: FooterSectionProps) {
  return (
    <footer className="mt-auto w-full scroll-mt-8 py-fluid-sm">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex flex-wrap items-start gap-fluid-lg">
          <div className="flex flex-col flex-wrap items-start gap-x-3 gap-y-2 sm:grow">
            <Link
              className="flex flex-row items-center gap-x-2 gap-y-1 place-content-start text-sm hover:opacity-70"
              href="/"
            >
              <MarketingIcons.brandMark className="h-[1.2em] w-auto fill-current" aria-label="Logo" />
              <span className="font-semibold">{brandName}</span>
            </Link>

            <p className="max-w-64 text-sm text-muted-foreground">{footer.description}</p>

            <div className="mt-4 flex flex-row flex-wrap items-center gap-x-3 gap-y-2 place-content-start">
              {footer.socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="group/button inline-flex items-center justify-center gap-[0.66ch] rounded-md bg-foreground/15 px-3 py-2 text-[0.8125rem] font-medium leading-tight text-foreground text-start whitespace-nowrap hover:z-10 hover:bg-foreground/10 disabled:pointer-events-none disabled:opacity-60"
                  {...actionProps({
                    label: item.label,
                    href: item.href,
                    external: true,
                  })}
                >
                  <SocialIcon
                    name={item.icon}
                    className="brand size-[1.1em] shrink-0 opacity-75 first:-ml-[0.21425em] last:-mr-[0.21425em]"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-wrap items-start gap-x-4 gap-y-3">
            <div className="font-mono text-[11px] font-medium text-foreground/50 uppercase tracking-wider">Product</div>
            <div className="flex flex-col flex-wrap items-start gap-x-3 gap-y-1.5">
              {footer.productLinks.map((item) => (
                <Link
                  key={item.label}
                  className="text-sm hover:text-secondary-foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-wrap items-start gap-x-4 gap-y-3">
            <div className="font-mono text-[11px] font-medium text-foreground/50 uppercase tracking-wider">Resources</div>
            <div className="flex flex-col flex-wrap items-start gap-x-3 gap-y-1.5">
              {footer.resourceLinks.map((item) => (
                <Link
                  key={item.label}
                  className="text-sm hover:text-secondary-foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-start gap-5 border-t pt-5">
          {footer.legalLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-[450] text-foreground hover:text-secondary-foreground"
            >
              {item.label}
            </Link>
          ))}
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
        </nav>
      </div>
    </footer>
  );
}
