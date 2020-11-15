import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const ProfileCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      d="M13.657 10.343a7.97 7.97 0 00-3.04-1.907 4.623 4.623 0 002.008-3.811A4.63 4.63 0 008 0a4.63 4.63 0 00-4.625 4.625c0 1.58.796 2.977 2.008 3.811a7.97 7.97 0 00-3.04 1.907A7.948 7.948 0 000 16h1.25A6.758 6.758 0 018 9.25 6.758 6.758 0 0114.75 16H16a7.948 7.948 0 00-2.343-5.657zM8 8a3.379 3.379 0 01-3.375-3.375A3.379 3.379 0 018 1.25a3.379 3.379 0 013.375 3.375A3.379 3.379 0 018 8z"
      fill={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
} as const;

export const ProfileIcon = asIcon(ProfileCurve, CURVE_DEFAULTS);
