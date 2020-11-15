import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const FilterCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <g stroke={color} fill="none" fillRule="evenodd">
      <path strokeLinecap="square" d="M3.5 3.5h16" />
      <circle fill="white" cx="3.5" cy="3.5" r="3" />
      <path strokeLinecap="square" d="M.5 14.5h19" />
      <circle fill="white" cx="17.5" cy="14.5" r="3" />
    </g>
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '21',
  height: '18',
  viewBox: '0 0 21 18',
} as const;

export const FilterIcon = asIcon(FilterCurve, CURVE_DEFAULTS);
