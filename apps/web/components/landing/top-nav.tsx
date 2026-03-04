'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { LandingAction, LandingContent } from '../../types/landing';
import { MarketingIcons } from '../icons/marketing-icons';

interface TopNavProps {
  brandName: LandingContent['brandName'];
  items: LandingContent['nav']['items'];
  demoAction: LandingContent['nav']['demoAction'];
  primaryAction: LandingContent['nav']['primaryAction'];
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

export function TopNav({ brandName, items, demoAction, primaryAction }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-49 duration-100">
      <nav className="container flex h-nav items-center gap-4 py-4 md:gap-6 lg:gap-8">
        <Link
          className="flex flex-row items-center gap-x-2 gap-y-1 place-content-start text-sm hover:opacity-70"
          href="/"
        >
          <MarketingIcons.brandMark className="h-[1.2em] w-auto fill-current" aria-label="Logo" />
          <span className="font-semibold">{brandName}</span>
        </Link>

        <span className="h-4 w-0.5 rotate-25 bg-ring max-lg:hidden" />

        <div className="flex flex-1 flex-wrap items-center gap-x-4 max-lg:hidden lg:gap-x-6">
          {items.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium text-foreground hover:text-secondary-foreground"
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="text-sm font-medium text-foreground hover:text-secondary-foreground md:hidden"
            href={demoAction.href}
            onClick={() => setMobileOpen(false)}
            {...actionProps(demoAction)}
          >
            {demoAction.label}
          </Link>
        </div>

        <div className="ml-auto flex flex-row items-center gap-x-2 gap-y-1 place-content-start">
          <Link
            href={demoAction.href}
            className="group/button inline-flex items-center justify-center rounded-full px-3 py-2 text-[0.8125rem] font-medium leading-tight text-foreground text-start whitespace-nowrap hover:z-10 hover:bg-foreground/10 max-md:hidden disabled:pointer-events-none disabled:opacity-60"
            {...actionProps(demoAction)}
          >
            <span className="flex-1 truncate only:text-center has-[div]:contents">{demoAction.label}</span>
          </Link>

          <Link
            href={primaryAction.href}
            className="group/button animate-rainbow relative inline-flex items-center justify-center rounded-full bg-[length:200%] bg-[linear-gradient(var(--color-foreground),var(--color-foreground)),linear-gradient(var(--color-background)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] px-3 py-2 text-[0.8125rem] font-medium leading-tight text-background text-start whitespace-nowrap [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(0.75rem)] hover:z-10 hover:opacity-85 disabled:pointer-events-none disabled:opacity-60"
            {...actionProps(primaryAction)}
          >
            <span className="flex-1 truncate only:text-center has-[div]:contents">{primaryAction.label}</span>
          </Link>
        </div>

        <button
          className="group/button -mx-3 inline-flex items-center justify-center gap-[0.66ch] rounded-md px-3 py-2 text-[0.8125rem] font-medium leading-tight text-foreground text-start whitespace-nowrap hover:z-10 hover:bg-foreground/10 lg:hidden disabled:pointer-events-none disabled:opacity-60"
          aria-label="Toggle menu"
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
        >
          <MarketingIcons.menu
            className="size-[1.1em] size-5 shrink-0 opacity-75 first:-ml-[0.21425em] last:-mr-[0.21425em]"
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
          <div className="flex flex-col flex-wrap items-start gap-x-4 gap-y-3">
            {items.map((item) => (
              <Link
                key={item.label}
                className="font-medium text-foreground hover:text-secondary-foreground"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="font-medium text-foreground hover:text-secondary-foreground md:hidden"
              href={demoAction.href}
              onClick={() => setMobileOpen(false)}
              {...actionProps(demoAction)}
            >
              {demoAction.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
