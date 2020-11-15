import React from 'react';

import { asIcon } from './Container';
import type { IColorable } from './Container';

const LoginCurve: React.FC<IColorable> = ({ color }) => {
  return (
    <>
      <path d="M7.692 1.333h6.231a.68.68 0 01.692.667v12a.68.68 0 01-.692.667h-6.23a.68.68 0 00-.693.666c0 .369.31.667.692.667h6.231C15.068 16 16 15.103 16 14V2c0-1.103-.932-2-2.077-2h-6.23A.68.68 0 007 .667c0 .368.31.666.692.666z" fill={color} />
      <path d="M10.796 8.509l-4.16 4.285a.664.664 0 01-.966-.007.736.736 0 01.006-1.01L8.65 8.714H.684C.306 8.714 0 8.395 0 8c0-.395.306-.714.684-.714H8.65L5.677 4.223a.737.737 0 01-.007-1.01.666.666 0 01.967-.007l4.16 4.286a.732.732 0 010 1.017z" fill={color} />
    </>
  );
};

const CURVE_DEFAULTS = {
  color: 'black',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
} as const;

export const LoginIcon = asIcon(LoginCurve, CURVE_DEFAULTS);
