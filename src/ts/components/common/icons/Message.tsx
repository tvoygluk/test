import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const MessageCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <g transform="matrix(1 0 0 -1 -1 24.395)" fill="none" fillRule="evenodd">
      <polygon points="24 .453 0 .453 0 24.943 24 24.943" />
      <path
        d="M20 22.902H4c-1.1 0-2-.919-2-2.041V2.494l4 4.081h14c1.1 0 2 .919 2 2.041v12.245c0 1.122-.9 2.04-2 2.04h0z"
        stroke={color}
      />
    </g>
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '22',
  height: '22',
  viewBox: '0 0 22 22',
} as const;

export const MessageIcon = asIcon(MessageCurve, CURVE_DEFAULTS);
