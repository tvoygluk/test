import React from 'react';

import { Discounts } from 'components/Discounts';
import { TagList } from 'components/TagList';

import { VendorList } from './VendorList';

import style from './style.scss';

export const HomePage: React.FC = () => {
  return (
    <main className={style.root}>
      <TagList className={style.tags} />
      <Discounts className={style.discounts} />
      <VendorList className={style.vendors} />
    </main>
  );
};
