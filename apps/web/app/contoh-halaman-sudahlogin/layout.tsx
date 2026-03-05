import { TopNav } from '../../components/landing/top-nav';
import { landingContent } from '../../content/landing-content';

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav
        brandName={landingContent.brandName}
        desktopLinks={landingContent.nav.desktopLinks}
      />
      <main className="container py-fluid-sm">{children}</main>
    </div>
  );
}
