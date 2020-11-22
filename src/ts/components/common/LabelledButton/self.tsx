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
  'variant'
>;

interface IIconable {
  iconClassName?: string;
}

// TODO: add ability of right-side icon positioning

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
    <Button {...propsRest} className={classNames(style.root, className)}>
      {children}

      <span className={classNames(style.label, labelClassName)}>
        {label}
      </span>
    </Button>
  );
};
