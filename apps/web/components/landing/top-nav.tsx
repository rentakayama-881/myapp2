'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface TopNavProps {
  brandName: LandingContent['brandName'];
  desktopLinks: LandingContent['nav']['desktopLinks'];
}

export function TopNav({ brandName, desktopLinks }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setAccountOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!accountMenuRef.current) {
        return;
      }

      if (!accountMenuRef.current.contains(event.target as Node)) {
        setAccountOpen(false);
      }
    };

    document.addEventListener('click', onDocumentClick);

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  const handleNavLinkClick = () => {
    setMobileOpen(false);
    setAccountOpen(false);
  };

  const accountMenuItems = ['account', 'mycase', 'mypurchase', 'withdraw', 'signout'] as const;

  return (
    <header className="sticky top-0 z-49 duration-100">
      <nav className="container flex items-center gap-4 py-4 h-nav md:gap-6 lg:gap-8">
        <Link className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start text-sm hover:opacity-70" href="#">
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
        </div>

        <div className="flex gap-x-2 gap-y-1 flex-row items-center place-content-start ml-auto max-lg:hidden">
          <div ref={accountMenuRef} className="relative">
            <button
              type="button"
              className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap hover:z-10 disabled:opacity-60 disabled:pointer-events-none text-foreground hover:bg-foreground/10 px-3 py-2 gap-[0.66ch] rounded-full"
              onClick={() => setAccountOpen((state) => !state)}
              aria-expanded={accountOpen}
              aria-haspopup="menu"
            >
              <span className="flex-1 truncate only:text-center has-[div]:contents">username_demo</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevrons-up-down size-[1.1em] opacity-75"
                aria-hidden
              >
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
              </svg>
            </button>

            {accountOpen ? (
              <div className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card p-1.5 shadow-lg" role="menu">
                {accountMenuItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="block w-full rounded-md px-2.5 py-2 text-left text-sm text-secondary-foreground hover:bg-foreground/10 hover:text-foreground"
                    role="menuitem"
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <button
          className="group/button inline-flex items-center justify-center font-medium text-[0.8125rem] text-start leading-tight whitespace-nowrap rounded-md hover:z-10 disabled:opacity-60 disabled:pointer-events-none text-foreground hover:bg-foreground/10 px-3 py-2 gap-[0.66ch] -mx-3 lg:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
        >
          <MarketingIcons.menu
            className="lucide lucide-menu shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] size-[1.1em] opacity-75 size-5!"
            aria-hidden
          />
        </button>
      </nav>

      <div
        className={[
          'absolute inset-x-0 top-nav -z-10 h-dvh bg-background transition-all duration-200 ease-in-out lg:hidden',
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        ].join(' ')}
      >
        <nav className="container flex flex-col gap-4 p-6">
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
            <div className="mt-4 h-px w-full bg-border" />
            <div className="text-sm font-medium text-secondary-foreground">username_demo</div>
            {accountMenuItems.map((item) => (
              <button
                key={item}
                type="button"
                className="font-medium text-foreground hover:text-secondary-foreground"
                onClick={handleNavLinkClick}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
