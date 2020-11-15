import React from 'react';
import classNames from 'classnames';

import type { IconContainerProps } from './types';

import style from './style.scss';

export const IconContainer: React.FC<IconContainerProps> = ({
  className,
  'aria-hidden': ariaHidden = true,
  ...propsRest
}) => {
  return (
    <svg
      className={classNames(style.root, className)}
      aria-hidden={ariaHidden}
      {...propsRest}
    />
  );
};

export type IconContainerType = typeof IconContainer;
