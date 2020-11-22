import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface IButtonDecorationConfigurable {
  variant?: 'black' | 'pink' | 'transparent';
  isPressed?: boolean;
}

type ButtonPropsType = React.ComponentPropsWithoutRef<'button'> & IButtonDecorationConfigurable;

// TODO: add ability to render as anchor

export const Button: React.FC<ButtonPropsType> = ({
  children = null,
  className,
  type = 'button',
  variant,
  isPressed,
  ...propsRest
}) => {
  return (
    <button
      className={classNames(
        style.root,
        variant && style[variant],
        isPressed && style.isPressed,
        className,
      )}
      type={type}
      {...propsRest}
      aria-pressed={isPressed}
    >
      {children}
    </button>
  );
};
