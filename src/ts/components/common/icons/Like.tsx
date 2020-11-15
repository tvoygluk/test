import React from 'react';

import { IconContainer } from './Container';
import type { IconProps } from './Container';

export const DEFAULT_COLOR = '#f54d92';

interface ILikeCurveColorInfo {
  fill: string;
  stroke: string;
}

interface ILikeCurveColorScheme {
  filled: ILikeCurveColorInfo;
  unfilled: ILikeCurveColorInfo;
}

const DEFAULT_COLOR_SCHEME = {
  filled: {
    fill: DEFAULT_COLOR,
    stroke: DEFAULT_COLOR,
  },
  unfilled: {
    fill: 'none',
    stroke: DEFAULT_COLOR,
  },
} as const;

type LikeCurvePaintStyle = keyof typeof DEFAULT_COLOR_SCHEME;

interface IPaintable {
  colorScheme?: ILikeCurveColorScheme;
  paint?: LikeCurvePaintStyle;
}

const LikeCurve: React.FC<IPaintable> = ({
  colorScheme = DEFAULT_COLOR_SCHEME,
  paint = 'unfilled',
}) => {
  const { fill, stroke } = colorScheme[paint];

  return (
    <path
      d="M10 3.667c-.67-1.732-2.547-3-4.5-3-2.543 0-4.5 1.932-4.5 4.5 0 3.529 3.793 6.258 9 11.5 5.207-5.242 9-7.971 9-11.5 0-2.568-1.957-4.5-4.5-4.5-1.955 0-3.83 1.268-4.5 3z"
      fill={fill}
      fillRule="evenodd"
      stroke={stroke}
    />
  );
};

const CURVE_DEFAULTS = {
  width: '18',
  height: '16',
  viewBox: '0 0 20 18',
} as const;

type LikeIconProps = IconProps<IPaintable>;

export const LikeIcon: React.FC<LikeIconProps> = ({
  colorScheme,
  paint = 'unfilled',
  viewBox,
  width,
  height,
  ...propsRest
}) => {
  return (
    <IconContainer
      {...propsRest}
      viewBox={viewBox ?? CURVE_DEFAULTS.viewBox}
      width={width ?? CURVE_DEFAULTS.width}
      height={height ?? CURVE_DEFAULTS.height}
    >
      <LikeCurve colorScheme={colorScheme} paint={paint} />
    </IconContainer>
  );
};
