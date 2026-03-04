import type { LandingFeatureIconName, LandingSocialIconName } from '../../types/landing';

type IconProps = React.SVGProps<SVGSVGElement>;

function svgProps(props: IconProps): IconProps {
  return {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
  };
}

export const MarketingIcons = {
  brandMark: (props: IconProps) => (
    <svg viewBox="0 0 216 251" fill="currentColor" {...props}>
      <path d="M0 105v93c0 3.18.29 6.35 2.53 8.6l42.25 42.24C48.56 252.62 55 250.34 55 245v-93c0-3.19-1.05-6.36-3.31-8.62l-42.6-42.6C5.28 96.97-.02 99.64 0 105Zm74-49v132c0 3.18.79 6.14 3.03 8.38l42.25 42.24c3.77 3.78 10.72.73 10.72-4.62V103c0-3.18-1.55-6.5-3.8-8.76L83.56 51.62C79.8 47.84 74 50.66 74 56Zm74-50v155c0 3.18.84 6.6 3.08 8.85l54.99 54.98c3.78 3.78 9.93 1.02 9.93-4.33v-155c0-3.18-.76-6.1-3.01-8.36L157.62 1.77C153.84-2 148 .66 148 6Z" />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  arrowUpRight: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  ),
  plus: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  ),
  gift: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  ),
  star: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  ),
  socialGithub: (props: IconProps) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...svgProps(props)}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  ),
  socialX: (props: IconProps) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...svgProps(props)}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  ),
  socialBluesky: (props: IconProps) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} {...svgProps(props)}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
    </svg>
  ),
  socialMail: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...svgProps(props)}>
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
};

function featureIconByName(name: LandingFeatureIconName, props: IconProps) {
  switch (name) {
    case 'dollar-sign':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'languages':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    case 'credit-card':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      );
    case 'zap':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      );
    case 'settings':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          <path d="M20 2v4" />
          <path d="M22 4h-4" />
          <circle cx="4" cy="20" r="2" />
        </svg>
      );
    case 'chart-bar':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <path d="M7 16h8" />
          <path d="M7 11h12" />
          <path d="M7 6h3" />
        </svg>
      );
    case 'cable':
      return (
        <svg viewBox="0 0 24 24" {...svgProps(props)}>
          <path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" />
          <path d="M17 21v-2" />
          <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" />
          <path d="M21 21v-2" />
          <path d="M3 5V3" />
          <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" />
          <path d="M7 5V3" />
        </svg>
      );
    default:
      return null;
  }
}

export function FeatureIcon({ name, ...props }: { name: LandingFeatureIconName } & IconProps) {
  return featureIconByName(name, props);
}

export function SocialIcon({ name, ...props }: { name: LandingSocialIconName } & IconProps) {
  switch (name) {
    case 'github':
      return <MarketingIcons.socialGithub {...props} />;
    case 'x':
      return <MarketingIcons.socialX {...props} />;
    case 'bluesky':
      return <MarketingIcons.socialBluesky {...props} />;
    case 'mail':
      return <MarketingIcons.socialMail {...props} />;
    default:
      return null;
  }
}
