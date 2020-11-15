import classNames from 'classnames';
import React from 'react';

import type { IVendorService } from 'store/vendor';

import style from './style.scss';

interface IVendorServiceProps {
  className?: string;
  data: IVendorService;
}

const DURATION_MOCK = '30 минут';
const DISCOUNT_MOCK = 5;

export const VendorService: React.FC<IVendorServiceProps> = ({ className, data }) => {
  const {
    discount,
    duration,
    name,
    price,
  } = data;

  return (
    <li className={classNames(style.root, className)}>
      <p className={style.title}>{name}</p>
      <span className={style.price}>
        {`${price} Р`}
      </span>
      <span className={style.duration}>{DURATION_MOCK}</span>
      <span className={style.discount}>{`${DISCOUNT_MOCK}%`}</span>
    </li>
  );
};
