'use client';

import { useId } from 'react';

interface FlowLoopIconProps {
  size?: number;
  color?: string; // solid color; omit for violet→cyan gradient
}

export default function FlowLoopIcon({ size = 38, color }: FlowLoopIconProps) {
  const uid = useId().replace(/:/g, '');
  const gradId = `bfg-${uid}`;
  const paint = color ?? `url(#${gradId})`;

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block', flexShrink: 0 }}>
      {!color && (
        <defs>
          <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="82.91" y1="31.00" x2="51.59" y2="8.98">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#00C4FF" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M82.91 31.00 A38 38 0 1 1 33.34 15.85"
        fill="none"
        stroke={paint}
        strokeWidth="13.5"
        strokeLinecap="round"
      />
      <polygon points="51.59,8.98 31.69,-0.30 42.31,28.88" fill={paint} />
    </svg>
  );
}
