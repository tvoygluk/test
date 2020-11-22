import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const OvalCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <circle
      cx="8.5"
      cy="8.5"
      r="7"
      strokeWidth="3"
      stroke={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '17',
  height: '17',
  viewBox: '0 0 17 17',
} as const;

export const OvalIcon = asIcon(OvalCurve, CURVE_DEFAULTS);
