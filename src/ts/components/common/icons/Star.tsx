import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const StarCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218z" fill={color} fillRule="evenodd" />
  );
};

const CURVE_DEFAULTS = {
  color: '#ffc50f',
  width: '19',
  height: '18',
  viewBox: '0 0 19 18',
} as const;

export const StarIcon = asIcon(StarCurve, CURVE_DEFAULTS);
