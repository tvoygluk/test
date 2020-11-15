import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/Button';
import type { IconContainerType } from 'common/icons';

import style from './style.scss';

interface ILabelledButtonSpecificProps {
  children: React.ReactElement<React.ComponentPropsWithoutRef<IconContainerType>>;
  label: string;
  labelClassName?: string;
}

type LabelledButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof Button> & ILabelledButtonSpecificProps,
  'isBlack' | 'isTransparent'
>;

interface IIconable {
  iconClassName?: string;
}

export type FinallyComposedLabelledButtonProps<T> = Omit<
  LabelledButtonProps & IIconable & T,
  'label' | 'children'
>;

export const LabelledButton: React.FC<LabelledButtonProps> = ({
  children,
  className,
  label,
  labelClassName,
  ...propsRest
}) => {
  return (
    <Button
      {...propsRest}
      className={classNames(style.root, className)}
    >
      {children}
      <span className={classNames(style.label, labelClassName)}>
        {label}
      </span>
    </Button>
  );
};
