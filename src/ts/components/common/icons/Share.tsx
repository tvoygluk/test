import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const ShareCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <path d="M13.333 12.723c-.675 0-1.28.271-1.742.696l-6.338-3.75c.045-.208.08-.416.08-.633 0-.217-.035-.425-.08-.632L11.52 4.69c.48.452 1.111.732 1.813.732C14.81 5.422 16 4.21 16 2.71 16 1.21 14.809 0 13.333 0c-1.475 0-2.666 1.21-2.666 2.71 0 .218.035.426.08.633L4.48 7.057a2.632 2.632 0 00-1.813-.732C1.19 6.325 0 7.536 0 9.036c0 1.5 1.191 2.711 2.667 2.711.702 0 1.333-.28 1.813-.732l6.329 3.76a2.59 2.59 0 00-.071.586c0 1.455 1.164 2.639 2.595 2.639 1.431 0 2.596-1.184 2.596-2.639 0-1.454-1.165-2.638-2.596-2.638z" fill={color} fillRule="evenodd" />
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '16',
  height: '18',
  viewBox: '0 0 16 18',
} as const;

export const ShareIcon = asIcon(ShareCurve, CURVE_DEFAULTS);
