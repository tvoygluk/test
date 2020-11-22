import React from 'react';
import classNames from 'classnames';

import { CHARS } from 'ts/constants';
import { Button } from 'common/Button';
import type { IVendorService } from 'store/vendor';

import style from './style.scss';

interface IVendorServiceProps {
  className?: string;
  data: IVendorService;
  isChecked?: boolean;
  isBrief?: boolean;
}

const DURATION_MOCK = 30;
const MINUTES_IN_HOUR = 60;

type VendorServiceDurationFormatter = (durationInMin: number) => string;

const formatDuration: VendorServiceDurationFormatter = (duration) => {
  const hours = Math.floor(duration / MINUTES_IN_HOUR);
  const minutesRest = duration - MINUTES_IN_HOUR * hours;

  const minutesStr = `${minutesRest} мин.`;

  if (hours === 0) {
    return minutesStr;
  }

  return `${hours} ч. ${minutesStr}`;
};

export const VendorService: React.FC<IVendorServiceProps> = ({
  className,
  data,
  isChecked = false,
  isBrief = false,
}) => {
  const {
    description,
    discount,
    duration = DURATION_MOCK,
    name,
    price,
  } = data;

  const actualPrice = discount ? Math.floor((price * (100 - discount)) / 100) : price;

  return (
    <div
      className={classNames(
        style.root,
        style[isBrief ? 'root_brief' : 'root_full'],
        className,
      )}
    >
      <p className={style.title}>{name}</p>

      <span className={style.price}>
        {`${actualPrice} Р`}
      </span>

      <span className={style.duration}>{formatDuration(duration)}</span>

      {discount && (
        <span className={style.oldPrice}>
          {`${price} Р`}
        </span>
      )}

      {!isBrief && (
        <>
          {description && (
            <ul className={style.description}>
              {description.map((it, i, arr) => (
                <li key={it} className={style.descriptionItem}>
                  <span>{it}</span>

                  {i !== arr.length - 1 && (
                    <span aria-hidden="true">
                      {` ${CHARS.DOT_SEPARATOR} `}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}

          <Button className={style.button} variant="pink" isPressed={isChecked}>
            Выбрать
          </Button>
        </>
      )}
    </div>
  );
};

VendorService.displayName = 'Vendor-Service';
