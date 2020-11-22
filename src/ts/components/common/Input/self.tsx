import React, { useState } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import classNames from 'classnames';

import style from './style.scss';

interface IInjectedProps {
  hint?: React.ReactNode;
  isInvalid?: boolean;
  pattern?: string;
  isNumberFormat?: boolean;
  format?: string;
  mask?: string;
}

type InputProps = React.ComponentPropsWithoutRef<'input'> & IInjectedProps & NumberFormatProps;

export const Input: React.FC<InputProps> = ({
  className,
  hint,
  isInvalid = false,
  'aria-label': ariaLabel,
  pattern,
  isNumberFormat,
  format,
  mask,
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
        {isNumberFormat ? (
          <NumberFormat
            format={format}
            mask={mask}
            className={style.field}
            onBlur={() => {
              setIsFocused(false);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            {...propsRest}
          />
        ) : (
          <input
            className={style.field}
            type="text"
            pattern={pattern}
            onBlur={() => {
              setIsFocused(false);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            {...propsRest}
          />
        )}
      </label>
      <p className={style.hint}>
        {hint}
      </p>
    </div>
  );
};
