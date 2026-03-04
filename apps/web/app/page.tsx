import { landingContent } from '../content/landing-content';
import { BottomCtaSection } from '../components/landing/bottom-cta-section';
import { FeaturesSection } from '../components/landing/features-section';
import { HeroSection } from '../components/landing/hero-section';
import { TopNav } from '../components/landing/top-nav';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopNav
        brandName={landingContent.brandName}
        brandTagline={landingContent.brandTagline}
        primaryAction={landingContent.topNavActions.primary}
        secondaryAction={landingContent.topNavActions.secondary}
      />

      <HeroSection
        heading={landingContent.hero.heading}
        subheading={landingContent.hero.subheading}
        primaryAction={landingContent.hero.primaryAction}
        secondaryAction={landingContent.hero.secondaryAction}
      />

      <FeaturesSection features={landingContent.features} />

      <BottomCtaSection
        heading={landingContent.bottomCta.heading}
        description={landingContent.bottomCta.description}
        action={landingContent.bottomCta.action}
      />
    </main>
  );
}
