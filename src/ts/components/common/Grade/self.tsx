import React from 'react';
import { StarIcon } from '../icons';

import style from './style.scss';

interface IGradeProps {
  count?: number;
  value: number;
  size?: number;
  inactiveOpacity?: string;
  activeOpacity?: string;
  onChange?: (value: number) => void;
}

export const Grade: React.FC<IGradeProps> = ({
  count = 5,
  value,
  size = 23,
  inactiveOpacity = '0.38',
  activeOpacity = '1',
  onChange,
}) => {
  const stars = Array.from({ length: count }, () => (
    <StarIcon
      width={size}
      height={size}
      noDefaultColor={false}
    />
  ));

  const handleChange = (val: number) => {
    if (typeof onChange === 'function') {
      onChange(val + 1);
    }
  };

  return (
    <div className={style.root}>
      {stars.map((star, index) => {
        let staropacity = inactiveOpacity;
        if (index < value) {
          staropacity = activeOpacity;
        }
        return (
          <button
            className={style.star}
            key={index}
            style={
              {
                opacity: staropacity,
                width: size,
                height: size,
              }
            }
            onClick={() => handleChange(index)}
          >
            {star}
          </button>
        );
      })}
    </div>
  );
};
