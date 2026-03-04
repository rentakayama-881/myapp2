'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { LandingAction, LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface TopNavProps {
  brandName: LandingContent['brandName'];
  desktopLinks: LandingContent['nav']['desktopLinks'];
  demoLink: LandingContent['nav']['demoLink'];
  primaryCta: LandingContent['nav']['primaryCta'];
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

export function TopNav({ brandName, desktopLinks, demoLink, primaryCta }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const handleNavLinkClick = () => {
    setMobileOpen(false);
  };

  const navRaised = isScrolled || mobileOpen;

  return (
    <header
      className="sticky top-0 z-49 duration-100"
      data-scrolled={navRaised ? 'true' : 'false'}
      data-mobile-open={mobileOpen ? 'true' : 'false'}
    >
      <nav
        className={[
          'container flex items-center gap-4 py-4 h-nav md:gap-6 lg:gap-8',
          'border border-transparent transition-[margin,border-color,background-color,box-shadow,backdrop-filter] duration-200',
          navRaised
            ? 'mt-2 rounded-2xl border-ring/25 bg-background/65 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-lg'
            : '',
        ].join(' ')}
      >
        <Link
          className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start text-sm hover:opacity-70"
          href="/"
        >
          <MarketingIcons.brandMark className="w-auto fill-current h-[1.2em]" aria-label="Logo" />
          <span className="font-semibold">{brandName}</span>
        </Link>

        <span className="w-0.5 h-4 bg-ring rotate-25 max-lg:hidden" />

        <div className="flex flex-wrap items-center gap-x-4 flex-1 max-lg:hidden lg:gap-x-6">
          {desktopLinks.map((item) => (
            <Link
              key={item.label}
              className="font-medium text-foreground hover:text-secondary-foreground text-sm"
              href={item.href}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="font-medium text-foreground hover:text-secondary-foreground text-sm md:hidden"
            href={demoLink.href}
            onClick={handleNavLinkClick}
            {...actionProps(demoLink)}
          >
            {demoLink.label}
          </Link>
        </div>

        <div className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start ml-auto">
          <Link
            href={demoLink.href}
            className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none text-foreground hover:bg-foreground/10 px-3 py-2 gap-[0.66ch] rounded-full max-md:hidden"
            {...actionProps(demoLink)}
          >
            <span className="flex-1 truncate only:text-center has-[div]:contents">{demoLink.label}</span>
          </Link>

          <Link
            href={primaryCta.href}
            className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none relative text-background animate-rainbow hover:opacity-85 bg-[linear-gradient(var(--color-foreground),var(--color-foreground)),linear-gradient(var(--color-background)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(0.75rem)] px-3 py-2 gap-[0.66ch] rounded-full"
            {...actionProps(primaryCta)}
          >
            <span className="flex-1 truncate only:text-center has-[div]:contents">{primaryCta.label}</span>
          </Link>
        </div>

        <button
          className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap rounded-md hover:z-10 disabled:opacity-60 disabled:pointer-events-none text-foreground hover:bg-foreground/10 px-3 py-2 gap-[0.66ch] -mx-3 lg:hidden"
          aria-controls="mobile-nav-panel"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span className="relative size-5">
            <MarketingIcons.menu
              className={[
                'lucide lucide-menu absolute inset-0 shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] size-5! transition-all duration-200',
                mobileOpen ? 'scale-75 -rotate-45 opacity-0' : 'opacity-75',
              ].join(' ')}
              aria-hidden
            />
            <MarketingIcons.close
              className={[
                'lucide lucide-x absolute inset-0 shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] size-5! transition-all duration-200',
                mobileOpen ? 'opacity-75' : 'pointer-events-none scale-75 rotate-45 opacity-0',
              ].join(' ')}
              aria-hidden
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav-panel"
        className={[
          'absolute inset-x-0 -z-10 h-dvh bg-background transition-all duration-200 ease-in-out lg:hidden',
          navRaised ? 'top-[calc(var(--nav-height)+0.5rem)]' : 'top-nav',
          mobileOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav className="container flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-medium text-foreground/60 uppercase tracking-wider">
              {brandName}
            </span>
            <button
              className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap rounded-md hover:z-10 disabled:opacity-60 disabled:pointer-events-none text-foreground hover:bg-foreground/10 px-2.5 py-2 gap-[0.66ch]"
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <MarketingIcons.close
                className="lucide lucide-x shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] opacity-75 size-5!"
                aria-hidden
              />
            </button>
          </div>

          <div className="flex gap-x-4 gap-y-3 flex-col items-start flex-wrap">
            {desktopLinks.map((item) => (
              <Link
                key={item.label}
                className="font-medium text-foreground hover:text-secondary-foreground"
                href={item.href}
                onClick={handleNavLinkClick}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="font-medium text-foreground hover:text-secondary-foreground md:hidden"
              href={demoLink.href}
              onClick={handleNavLinkClick}
              {...actionProps(demoLink)}
            >
              {demoLink.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
