import { BottomCtaSection } from '../components/landing/bottom-cta-section';
import { BackgroundStars } from '../components/landing/background-stars';
import { FaqSection } from '../components/landing/faq-section';
import { FeaturesSection } from '../components/landing/features-section';
import { FooterSection } from '../components/landing/footer-section';
import { HeroSection } from '../components/landing/hero-section';
import { PricingSection } from '../components/landing/pricing-section';
import { PromoBar } from '../components/landing/promo-bar';
import { QuoteStrip } from '../components/landing/quote-strip';
import { StackSection } from '../components/landing/stack-section';
import { TestimonialsSection } from '../components/landing/testimonials-section';
import { TopNav } from '../components/landing/top-nav';
import { landingContent } from '../content/landing-content';

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black text-foreground">
      <BackgroundStars />
      <PromoBar promoBar={landingContent.promoBar} />
      <TopNav
        brandName={landingContent.brandName}
        items={landingContent.nav.items}
        demoAction={landingContent.nav.demoAction}
        primaryAction={landingContent.nav.primaryAction}
      />

      <main className="animate-fade-in">
        <HeroSection hero={landingContent.hero} />
        <StackSection stack={landingContent.stack} />
        <FeaturesSection features={landingContent.features} />
        <PricingSection pricing={landingContent.pricing} />
        <QuoteStrip quoteStrip={landingContent.quoteStrip} />
        <FaqSection faq={landingContent.faq} />
        <TestimonialsSection testimonials={landingContent.testimonials} />
        <BottomCtaSection bottomCta={landingContent.bottomCta} />
      </main>

      <FooterSection brandName={landingContent.brandName} footer={landingContent.footer} />
    </div>
  );
}
