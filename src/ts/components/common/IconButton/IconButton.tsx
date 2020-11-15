import classNames from 'classnames';
import React from 'react';

import { Button } from 'common/Button';

import style from './style.scss';

interface IIconRenderable {
  renderIcon?: ((...args: unknown[]) => React.ReactNode);
}

interface IPressable {
  pressed?: boolean;
}

type IconButtonProps = React.ComponentPropsWithoutRef<'button'> & IIconRenderable & IPressable;

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  pressed,
  renderIcon,
  ...propsRest
}) => {
  return (
    <Button
      className={classNames(style.root, className)}
      aria-pressed={pressed}
      {...propsRest}
    >
      {children ?? (
        typeof renderIcon === 'function' && renderIcon(pressed)
      )}
    </Button>
  );
};
