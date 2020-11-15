export interface IColorable {
  color?: string;
}

export interface IColorDefaultable {
  noDefaultColor?: boolean;
}

export interface ICurveDefaults {
  color: string;
  viewBox: string;
  width: string;
  height: string;
}

export type IconContainerProps = React.ComponentPropsWithoutRef<'svg'>;

export type IconProps<CP = IColorable> = Omit<
  CP & IColorDefaultable & IconContainerProps,
  'children'
>;
