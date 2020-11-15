import classNames from 'classnames';
import React from 'react';

import { CHARS } from 'ts/constants';
import { Button } from 'common/Button';
import type { IVendorService } from 'store/vendor';

import style from './style.scss';

interface IVendorServiceProps {
  className?: string;
  data: IVendorService;
  isExtended?: boolean;
}

const DURATION_MOCK = 30;
const MINUTES_IN_HOUR = 60;

type VendorServiceDurationFormatter = (durationInMin: number) => string;

const formatDuration: VendorServiceDurationFormatter = (duration) => {
  const hours = Math.floor(duration / MINUTES_IN_HOUR);
  const minutesRest = duration - MINUTES_IN_HOUR * hours;

  const minutesStr = `${minutesRest} мин`;

  if (hours === 0) {
    return minutesStr;
  }

  return `${hours} ч ${minutesStr}`;
};

export const VendorService: React.FC<IVendorServiceProps> = ({
  className,
  data,
  isExtended = true,
}) => {
  const {
    description = [],
    discount,
    duration = DURATION_MOCK,
    name,
    price,
  } = data;

  return (
    <div
      className={classNames(style.root, className, {
        [style.isExtended]: isExtended,
      })}
    >
      <p className={style.title}>{name}</p>

      <span className={style.price}>
        {`${price} Р`}
      </span>

      <span className={style.duration}>{formatDuration(duration)}</span>

      {discount && (
        <span className={style.discount}>
          {`скидка ${discount}%`}
        </span>
      )}

      <ul className={style.description}>
        {description.map((it, i, arr) => (
          <li key={it} className={style.descriptionItem}>
            {`${it}${i === arr.length - 1 ? '' : ` ${CHARS.DOT_SEPARATOR} `}`}
          </li>
        ))}
      </ul>

      {isExtended && (
        <Button className={style.button}>
          Выбрать
        </Button>
      )}
    </div>
  );
};
