import React from 'react';

import { Discounts } from 'components/Discounts';
import { Tagline } from 'components/Tagline';

import { VendorList } from './VendorList';

import style from './style.scss';

export const HomePage: React.FC = () => {
  return (
    <main className={style.root}>
      <Tagline className={style.tags} />
      <Discounts className={style.discounts} />
      <VendorList className={style.vendors} />
    </main>
  );
};
