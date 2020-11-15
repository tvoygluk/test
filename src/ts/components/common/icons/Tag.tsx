import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const TagCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path
      fillRule="evenodd"
      d="M2.5 4A1.5 1.5 0 112.501.999 1.5 1.5 0 012.5 4zm5.15-4H0v7.65c0 .47.191.893.499 1.203L8.152 16.5a1.695 1.695 0 002.404.002l5.944-5.946a1.696 1.696 0 00.001-2.405L8.853.497A1.707 1.707 0 007.649 0z"
      fill={color}
    />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '17',
  height: '17',
  viewBox: '0 0 17 17',
} as const;

export const TagIcon = asIcon(TagCurve, CURVE_DEFAULTS);
