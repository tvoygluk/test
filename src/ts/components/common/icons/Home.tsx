import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const HomeCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      d="M18.74 8.122L10.116.28l-.082-.074A.791.791 0 009.848.08L9.839.076a.793.793 0 00-.678 0L9.15.08a.792.792 0 00-.184.126l-.08.073L.258 8.122a.792.792 0 001.065 1.172l.26-.236v9.15c0 .438.354.792.791.792h14.25a.792.792 0 00.792-.792v-9.15l.259.236a.792.792 0 101.065-1.172zM7.918 17.417v-4.75a1.583 1.583 0 113.166 0v4.75H7.917zm7.916 0h-3.166v-4.75a3.167 3.167 0 10-6.334 0v4.75H3.167V7.619L9.5 1.861l6.333 5.758v9.798z"
      fill={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '19',
  height: '19',
  viewBox: '0 0 19 19',
} as const;

export const HomeIcon = asIcon(HomeCurve, CURVE_DEFAULTS);
