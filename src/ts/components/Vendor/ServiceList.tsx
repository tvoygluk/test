import React from 'react';

import type { IVendorService } from 'store/vendor';

import { VendorService } from './Service';

import style from './style.scss';

interface IVendorServiceListProps {
  className?: string;
  list: IVendorService[];
  isBrief?: boolean;
}

export const VendorServiceList: React.FC<IVendorServiceListProps> = ({
  list,
  isBrief = false,
}) => {
  return (
    <ul className={style.list}>
      {list.map((item) => (
        <li key={item.id} className={style.service}>
          <VendorService data={item} isBrief={isBrief} />
        </li>
      ))}
    </ul>
  );
};

VendorServiceList.displayName = 'Vendor-ServiceList';
