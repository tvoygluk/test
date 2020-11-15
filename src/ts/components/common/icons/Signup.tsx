import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const SignupCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      d="M7.984.017a4.621 4.621 0 00-4.616 4.616c0 1.576.795 2.97 2.005 3.804a7.954 7.954 0 00-3.034 1.903A7.932 7.932 0 000 15.986h1.248a6.744 6.744 0 016.736-6.737A4.621 4.621 0 0012.6 4.633 4.621 4.621 0 007.984.017zm0 7.984a3.372 3.372 0 01-3.368-3.368 3.372 3.372 0 013.368-3.369 3.372 3.372 0 013.369 3.369A3.372 3.372 0 017.984 8zm5.396 4.116v-2.62h-1.247v2.62h-2.62v1.247h2.62v2.62h1.247v-2.62H16v-1.247h-2.62z"
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

export const SignupIcon = asIcon(SignupCurve, CURVE_DEFAULTS);
