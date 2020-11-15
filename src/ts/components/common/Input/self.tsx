import React, { useState } from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface IInjectedProps {
  hint?: React.ReactNode;
  isInvalid?: boolean;
}

type InputProps = React.ComponentPropsWithoutRef<'input'> & IInjectedProps;

export const Input: React.FC<InputProps> = ({
  className,
  hint,
  isInvalid = false,
  'aria-label': ariaLabel,
  ...propsRest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={classNames(style.root, className, {
        [style.focused]: isFocused,
        [style.invalid]: isInvalid,
      })}
    >
      <label className={style.label} aria-label={ariaLabel}>
        <input
          className={style.field}
          type="text"
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          {...propsRest}
        />
      </label>
      <p className={style.hint}>
        {hint}
      </p>
    </div>
  );
};
