import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const SocialCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <g>
      <path
        fillRule="evenodd"
        d="M7 8C4.667 8-.001 9.167-.001 11.5v2.499H14V11.5C14 9.167 9.334 8 7 8zm8.001 0c-.291 0-.617.018-.966.054C15.193 8.892 16 10.017 16 11.5v2.499h5.999V11.5c0-2.333-4.665-3.5-6.998-3.5zM7-.001A3.001 3.001 0 007 6a2.993 2.993 0 002.991-3A2.994 2.994 0 007-.001zm8.001 0a3.002 3.002 0 000 6.001 2.992 2.992 0 002.989-3 2.993 2.993 0 00-2.989-3.001z"
        fill={color}
      />
    </g>
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '22',
  height: '14',
  viewBox: '0 0 22 14',
} as const;

export const SocialIcon = asIcon(SocialCurve, CURVE_DEFAULTS);
