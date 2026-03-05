'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface MemberShellProps {
  children: React.ReactNode;
}

const sidebarItems = [
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
  { label: 'Case', href: '/contoh-halaman-sudahlogin/case' },
  { label: 'Market', href: '/contoh-halaman-sudahlogin/market' },
] as const;

const accountItems = ['account', 'mycase', 'mypurchase', 'withdraw', 'signout'] as const;

function ChevronUpDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 opacity-75"
      aria-hidden
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function sidebarLinkClass(active: boolean) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition',
    active
      ? 'bg-foreground/12 text-foreground'
      : 'text-secondary-foreground hover:bg-foreground/8 hover:text-foreground',
  ].join(' ');
}

export function MemberShell({ children }: MemberShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl">
        <aside className="hidden w-64 shrink-0 border-r border-border/80 bg-card/45 lg:flex lg:flex-col">
          <div className="flex h-nav items-center border-b border-border/80 px-6">
            <Link href="/" className="text-sm font-semibold tracking-wide hover:text-secondary-foreground">
              aivalid.id
            </Link>
          </div>

          <nav className="grid gap-1 p-4">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={sidebarLinkClass(isActive(pathname, item.href))}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
            <div className="container flex h-nav items-center gap-3">
              <Link href="/" className="text-sm font-semibold tracking-wide hover:text-secondary-foreground lg:hidden">
                aivalid.id
              </Link>

              <div className="text-sm text-muted-foreground">Area Member</div>

              <div ref={menuRef} className="relative ml-auto">
                <button
                  type="button"
                  onClick={() => setMenuOpen((state) => !state)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm font-medium text-foreground hover:bg-card"
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                >
                  <span className="max-w-40 truncate">username_demo</span>
                  <ChevronUpDownIcon />
                </button>

                {menuOpen ? (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card p-1.5 shadow-lg"
                  >
                    {accountItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                        className="block w-full rounded-md px-2.5 py-2 text-left text-sm text-secondary-foreground hover:bg-foreground/10 hover:text-foreground"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </header>

          <nav className="border-b border-border/80 bg-card/20 px-4 py-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={[sidebarLinkClass(isActive(pathname, item.href)), 'shrink-0'].join(' ')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <main className="container flex-1 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
