import type { MarketingIconName } from '../../types/landing';

type IconProps = React.HTMLAttributes<SVGElement>;

export const MarketingIcons = {
  brandMark: (props: IconProps) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="3" y="3" width="26" height="26" rx="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 18.5L14 14.5L17 17.5L22 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="12.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  validation: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3L5 6V11C5 15.5 8 19.6 12 21C16 19.6 19 15.5 19 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.8L11.2 13.5L14.7 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sources: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 15.5H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  expert: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 19C6.8 16.7 9.1 15 12 15C14.9 15 17.2 16.7 18 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19.2 6.5L20.2 7.5L21.8 5.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 6.5L19 12L13.5 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

interface MarketingIconProps extends IconProps {
  name: MarketingIconName;
}

export function MarketingIcon({ name, ...props }: MarketingIconProps) {
  const Icon = MarketingIcons[name];
  return <Icon {...props} />;
}
