import React from 'react';

import { IconContainer } from './self';
import type { IColorable, ICurveDefaults, IconProps } from './types';

export const asIcon = (
  Curve: React.FC<IColorable>,
  defaults: ICurveDefaults,
): React.FC<IconProps> => {
  const WrappedCurve: React.FC<IconProps> = ({
    color,
    viewBox,
    width,
    height,
    noDefaultColor = true,
    ...propsRest
  }) => {
    return (
      <IconContainer
        {...propsRest}
        viewBox={viewBox ?? defaults.viewBox}
        width={width ?? defaults.width}
        height={height ?? defaults.height}
      >
        <Curve color={(noDefaultColor || color) ? color : defaults.color} />
      </IconContainer>
    );
  };

  WrappedCurve.displayName = `asIcon(${Curve.displayName ?? Curve.name})`;

  return WrappedCurve;
};
