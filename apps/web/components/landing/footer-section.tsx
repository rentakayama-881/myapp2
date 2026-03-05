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
      rel: action.rel ?? 'noopener nofollow',
    } as const;
  }

  return {};
}

export function FooterSection({ brandName, footer }: FooterSectionProps) {
  return (
    <footer className="w-full scroll-mt-8 py-fluid-sm mt-auto">
      <div className="container flex flex-col gap-fluid-sm">
        <div className="flex flex-wrap items-start gap-fluid-lg">
          <div className="flex gap-x-3 gap-y-2 flex-col items-start flex-wrap sm:grow">
            <Link className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start text-sm hover:opacity-70" href="#">
              <MarketingIcons.brandMark className="w-auto fill-current h-[1.2em]" aria-label="Logo" />
              <span className="font-semibold">{brandName}</span>
            </Link>

            <p className="max-w-64 text-sm text-muted-foreground">{footer.description}</p>

            <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap mt-4">
              {footer.socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap rounded-md hover:z-10 disabled:opacity-60 disabled:pointer-events-none bg-foreground/15 text-foreground hover:bg-foreground/10 px-3 py-2 gap-[0.66ch]"
                  {...actionProps({
                    label: item.label,
                    href: item.href,
                    external: true,
                    rel: 'noopener nofollow',
                  })}
                >
                  <SocialIcon
                    name={item.icon}
                    className={[
                      'shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] opacity-75',
                      item.icon === 'mail' ? 'lucide lucide-mail' : 'brand',
                    ].join(' ')}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-x-4 gap-y-3 flex-col items-start flex-wrap">
            <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[11px]">
              Product
            </div>
            <div className="flex gap-x-3 flex-col items-start flex-wrap gap-y-1.5">
              {footer.productLinks.map((item) => (
                <Link key={item.label} className="text-sm hover:text-secondary-foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-x-4 gap-y-3 flex-col items-start flex-wrap">
            <div className="font-mono font-medium tracking-wider text-foreground/50 uppercase [&[href]]:hover:text-foreground/75 text-[11px]">
              Resources
            </div>
            <div className="flex gap-x-3 flex-col items-start flex-wrap gap-y-1.5">
              {footer.resourceLinks.map((item) => (
                <Link key={item.label} className="text-sm hover:text-secondary-foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-start gap-5 border-t pt-5">
          {footer.legalLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-xs font-[450] text-foreground hover:text-secondary-foreground">
              {item.label}
            </Link>
          ))}
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
        </nav>
      </div>
    </footer>
  );
}
