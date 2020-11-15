import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface IButtonDecorationConfigurable {
  isBlack?: boolean;
  isTransparent?: boolean;
}

type ButtonPropsType = React.ComponentPropsWithoutRef<'button'> & IButtonDecorationConfigurable;

export const Button: React.FC<ButtonPropsType> = ({
  children = null,
  className,
  type = 'button',
  isBlack = false,
  isTransparent = false,
  ...propsRest
}) => {
  return (
    <button
      className={classNames(
        style.root,
        {
          [style.black]: isBlack && !isTransparent,
          [style.transparent]: !isBlack && isTransparent,
        },
        className,
      )}
      type={type}
      {...propsRest}
    >
      {children}
    </button>
  );
};
