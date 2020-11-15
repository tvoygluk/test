import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const CloseCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <g transform="rotate(-45 5.879 13.121)" fillRule="evenodd" fill={color}>
      <rect x="10.27" y=".259" width="1.668" height="21.69" rx=".834" />
      <path d="M.26 11.104c0-.46.373-.834.834-.834h20.021a.834.834 0 110 1.669H1.094a.834.834 0 01-.835-.835z" />
    </g>
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '17',
  height: '16',
  viewBox: '0 0 17 16',
} as const;

export const CloseIcon = asIcon(CloseCurve, CURVE_DEFAULTS);
