import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

export function BrandMark(props: IconProps) {
  return (
    <svg viewBox="0 0 18 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="bf-mark" x1="16" y1="1" x2="2" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9a4dff" />
          <stop offset="0.55" stopColor="#5a63ff" />
          <stop offset="1" stopColor="#18a4ff" />
        </linearGradient>
      </defs>
      <path fill="url(#bf-mark)" d="M6.4.6 12.8 4v5l-6.4 3.4L1.6 9.8V4.1z" opacity=".78" />
      <path fill="url(#bf-mark)" d="m11 8 6.2 3.4v5.3l-6.6 3.5-5-2.7v-5.2z" />
      <path fill="url(#bf-mark)" d="m.8 12.4 4.8 2.6v6.4L3 23.3l-2.2-1.2z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.16 12C2.16 6.55 6.6 2.11 12.06 2.11c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...line} strokeWidth={2.6} {...props}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

function TargetIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M21 10a9.5 9.5 0 1 1-7-7" />
      <path d="M16.4 11.2a4.5 4.5 0 1 1-3.6-3.6" />
      <path d="m12 12 6-6M18 6V3.2l2.4-1.4.3 1.9 1.9.3L21.2 6z" />
    </svg>
  );
}

function LayersIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path fill="currentColor" fillOpacity=".35" d="m12 2.5 9.5 5-9.5 5-9.5-5z" />
      <path d="m2.5 12 9.5 5 9.5-5M2.5 16.5l9.5 5 9.5-5" />
    </svg>
  );
}

function PeopleIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M6 21v-3.2c0-2.4 2-4.3 4.3-4.3h3.4c2.4 0 4.3 2 4.3 4.3V21z" />
      <path d="M5.8 4.6a2.6 2.6 0 0 0 0 5M18.2 4.6a2.6 2.6 0 0 1 0 5M1.5 19v-2.5c0-1.9 1.3-3.4 3-3.8M22.5 19v-2.5c0-1.9-1.3-3.4-3-3.8" />
    </svg>
  );
}

function BoltIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="m14 1-11 13h7L7 23l14-14h-8z" /></svg>;
}

export const benefitIcons = [BoltIcon, TargetIcon, LayersIcon, PeopleIcon];
