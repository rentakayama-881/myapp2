export type MarketingIconName = 'validation' | 'sources' | 'expert';

export interface LandingAction {
  label: string;
  href: string;
}

export interface LandingFeature {
  title: string;
  description: string;
  icon: MarketingIconName;
}

export interface LandingContent {
  brandName: string;
  brandTagline: string;
  hero: {
    heading: string;
    subheading: string;
    primaryAction: LandingAction;
    secondaryAction: LandingAction;
  };
  features: LandingFeature[];
  bottomCta: {
    heading: string;
    description: string;
    action: LandingAction;
  };
  topNavActions: {
    primary: LandingAction;
    secondary: LandingAction;
  };
}
