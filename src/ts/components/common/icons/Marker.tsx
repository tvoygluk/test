import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const MarkerCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path d="M7 1C3.683 1 1 3.66 1 6.95 1 11.412 7 18 7 18s6-6.588 6-11.05C13 3.66 10.317 1 7 1h0zm0 8a2 2 0 11.001-4.001A2 2 0 017 9h0z" fill={color} fillRule="evenodd" />
  );
};

const CURVE_DEFAULTS = {
  color: '#1c76db',
  width: '12',
  height: '17',
  viewBox: '0 0 14 18',
} as const;

export const MarkerIcon = asIcon(MarkerCurve, CURVE_DEFAULTS);
