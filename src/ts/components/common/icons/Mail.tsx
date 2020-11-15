import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const MailCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      fillRule="evenodd"
      d="M16.2 0H1.8C.81 0 0 .844 0 1.875v11.25C0 14.156.81 15 1.8 15h14.4c.99 0 1.8-.844 1.8-1.875V1.875C18 .844 17.19 0 16.2 0zm0 3.75L9 8.438 1.8 3.75V1.875L9 6.563l7.2-4.688V3.75z"
      fill={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '18',
  height: '15',
  viewBox: '0 0 18 15',
} as const;

export const MailIcon = asIcon(MailCurve, CURVE_DEFAULTS);
