export type LandingFeatureIconName =
  | 'dollar-sign'
  | 'globe'
  | 'languages'
  | 'code'
  | 'credit-card'
  | 'zap'
  | 'settings'
  | 'sparkles'
  | 'chart-bar'
  | 'cable';

export type LandingSocialIconName = 'github' | 'x' | 'bluesky' | 'mail';

export interface LandingAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface LandingNavItem {
  label: string;
  href: string;
}

export interface LandingFeatureItem {
  title: string;
  description: string;
  icon: LandingFeatureIconName;
}

export interface LandingPricingTier {
  name: string;
  description: string;
  priceLabel: string;
  strikeLabel?: string;
  note?: string;
  badge?: string;
  highlighted?: boolean;
  benefits: string[];
  cta: LandingAction;
}

export interface LandingFaqItem {
  question: string;
  answer: string;
}

export interface LandingTestimonialItem {
  quote: string;
  name: string;
  role: string;
  source: string;
  avatar?: string;
  sourceHref?: string;
}

export interface LandingStackItem {
  label: string;
  height: number;
}

export interface LandingFooterSocialItem {
  label: string;
  href: string;
  icon: LandingSocialIconName;
}

export interface LandingContent {
  brandName: string;
  brandTagline: string;
  promoBar: {
    heading: string;
    codePrefix: string;
    code: string;
  };
  nav: {
    desktopLinks: [
      LandingNavItem,
      LandingNavItem,
      LandingNavItem,
      LandingNavItem,
      LandingNavItem,
      LandingNavItem,
    ];
    demoLink: LandingAction;
    primaryCta: LandingAction;
  };
  hero: {
    overline: string;
    heading: string;
    subheading: string;
    primaryAction: LandingAction;
    promoPulseText: string;
    socialProofLabel: string;
    customerAvatars: [string, string, string, string, string];
    mediaAlt: string;
  };
  stack: {
    overline: string;
    heading: string;
    items: LandingStackItem[];
  };
  features: {
    heading: string;
    description: string;
    items: LandingFeatureItem[];
  };
  pricing: {
    overline: string;
    heading: string;
    description: string;
    offerBadge: string;
    offerDivider: string;
    offerCounterLabel: string;
    offerCounterValue: string;
    legalNote: string;
    socialProofLabel: string;
    customerAvatars: [string, string, string, string, string];
    tiers: LandingPricingTier[];
  };
  quoteStrip: {
    text: string;
    authorName: string;
    authorAvatar: string;
    sourceLabel: string;
    sourceHref: string;
  };
  faq: {
    heading: string;
    description: string;
    items: LandingFaqItem[];
  };
  testimonials: {
    overline: string;
    heading: string;
    description: string;
    viewAllAction: LandingAction;
    items: LandingTestimonialItem[];
  };
  bottomCta: {
    overline: string;
    heading: string;
    description: string;
    action: LandingAction;
  };
  footer: {
    description: string;
    productLinks: LandingNavItem[];
    resourceLinks: LandingNavItem[];
    legalLinks: LandingNavItem[];
    socialLinks: LandingFooterSocialItem[];
    copyright: string;
  };
}
