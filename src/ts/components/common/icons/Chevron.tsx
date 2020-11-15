import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const ChevronCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <polygon
      fill={color}
      fillRule="evenodd"
      points="16.6 8.6 12 13.2 7.4 8.6 6 10 12 16 18 10"
      transform="translate(-6 -8)"
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '12',
  height: '8',
  viewBox: '0 0 12 8',
} as const;

export const ChevronIcon = asIcon(ChevronCurve, CURVE_DEFAULTS);
