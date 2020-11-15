import classNames from 'classnames';
import React from 'react';

import { DiscountsItem } from './Item';
import style from './style.scss';

const mockedDiscounts = [
  {
    title: 'ARTI20',
    amount: 20,
  },
  {
    title: 'ARTI40',
    amount: 15,
  },
];

interface IDiscountsProps {
  className?: string;
}

export const Discounts: React.FC<IDiscountsProps> = ({ className }) => {
  return (
    <section className={classNames(style.root, className)} aria-label="Скидка дня">
      <ul className={style.list}>
        {mockedDiscounts.map((it, i, arr) => (
          <DiscountsItem
            key={it.title}
            className={style[i === arr.length - 1 ? 'item_last' : 'item']}
            discount={it}
          />
        ))}
      </ul>
    </section>
  );
};
