import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const OutboxCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      fillRule="evenodd"
      d="M.833 7l15 1.999L.834 11l.011 7 20.989-9.001L.843 0l-.01 7z"
      fill={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '22',
  height: '18',
  viewBox: '0 0 22 18',
} as const;

export const OutboxIcon = asIcon(OutboxCurve, CURVE_DEFAULTS);
