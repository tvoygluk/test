import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const MenuCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={color} strokeLinecap="round" />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
} as const;

export const MenuIcon = asIcon(MenuCurve, CURVE_DEFAULTS);
