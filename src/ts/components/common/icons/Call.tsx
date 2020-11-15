import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const CallCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      d="M2 1a1 1 0 00-1 1c0 9.388 7.612 17 17 17a1 1 0 001-1v-3.5a.999.999 0 00-1-.999c-1.248 0-2.448-.201-3.572-.569a.997.997 0 00-1.015.245l-2.201 2.203a15.08 15.08 0 01-6.589-6.586l2.2-2.207a1 1 0 00.245-1.015A11.468 11.468 0 016.499 2c0-.553-.447-1-.999-1H2z"
      stroke={color}
      fill="none"
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '20',
  height: '20',
  viewBox: '0 0 20 20',
} as const;

export const CallIcon = asIcon(CallCurve, CURVE_DEFAULTS);
