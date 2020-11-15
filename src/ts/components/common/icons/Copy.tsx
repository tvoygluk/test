import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const CopyCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      fillRule="evenodd"
      d="M11 0H1.571C.703 0 0 .783 0 1.75V14h1.571V1.75H11V0zm3.267 3H4.733C3.776 3 3 3.747 3 4.667v11.666C3 17.253 3.776 18 4.733 18h9.534c.957 0 1.733-.747 1.733-1.667V4.667C16 3.747 15.223 3 14.267 3zM5 5h9v11H5V5z"
      fill={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '16',
  height: '18',
  viewBox: '0 0 16 18',
} as const;

export const CopyIcon = asIcon(CopyCurve, CURVE_DEFAULTS);
