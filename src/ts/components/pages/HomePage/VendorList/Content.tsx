import React from 'react';

import { Pagination } from 'components/Pagination';
import { Vendor } from 'components/Vendor';
import type { IVendor } from 'store/vendor';

import style from './style.scss';

interface IVendorListContentProps {
  list: IVendor[];
}

const PAGINATION_SIZE = 5;

export const VendorListContent: React.FC<IVendorListContentProps> = ({ list }) => {
  // TODO: anyway, we need to show some vendors in this case!
  if (list.length === 0) {
    return (
      <p>Не найден ни один салон поблизости.</p>
    );
  }

  return (
    <>
      <ul className={style.list}>
        {list.map((item, i: number, arr) => (
          <li
            key={item.id}
            className={style[i === arr.length - 1 ? 'item_last' : 'item']}
          >
            <Vendor data={item} headingLevel={3} isArticle />
          </li>
        ))}
      </ul>
      <Pagination amount={PAGINATION_SIZE} />
    </>
  );
};
