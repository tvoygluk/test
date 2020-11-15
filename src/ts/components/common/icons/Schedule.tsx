import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const ScheduleCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <g fill="none" fillRule="evenodd">
      <path d="M.5 19.5h18V2A1.5 1.5 0 0017 .5H2A1.5 1.5 0 00.5 2v17.5z" stroke={color} />
      <path d="M.5 4.5h18V2A1.5 1.5 0 0017 .5H2A1.5 1.5 0 00.5 2v2.5z" stroke={color} />
      <g transform="translate(6 8)" fill={color}>
        <rect y="3" width="1" height="1" rx=".5" />
        <rect x="3" y="3" width="1" height="1" rx=".5" />
        <rect x="6" y="3" width="1" height="1" rx=".5" />
        <rect y="6" width="1" height="1" rx=".5" />
        <rect x="3" y="6" width="1" height="1" rx=".5" />
        <rect x="6" y="6" width="1" height="1" rx=".5" />
        <rect width="1" height="1" rx=".5" />
        <rect x="3" width="1" height="1" rx=".5" />
        <rect x="6" width="1" height="1" rx=".5" />
      </g>
    </g>
  );
};

const CURVE_DEFAULTS = {
  color: '#f54d92',
  width: '19',
  height: '20',
  viewBox: '0 0 19 20',
} as const;

export const ScheduleIcon = asIcon(ScheduleCurve, CURVE_DEFAULTS);
