import React, { useEffect } from 'react';
import classNames from 'classnames';

import { IconButton } from 'common/IconButton';
import { FilterIcon } from 'common/icons';
import { useVendor } from 'store/vendor';
import { ProcessEnum } from 'ts/constants';

import { VendorListContent } from './Content';

import style from './style.scss';

interface IVendorListProps {
  className?: string;
}

const VENDORS_TITLE_ID = 'vendors-title';

// TODO: add skeleton loader

export const VendorList: React.FC<IVendorListProps> = ({ className }) => {
  const { vendor, vendorActions } = useVendor();

  useEffect(() => {
    vendorActions.getVendors();
  }, [vendorActions]);

  return (
    <section className={classNames(style.root, className)} aria-labelledby={VENDORS_TITLE_ID}>
      <div className={style.header}>
        <h2 className={style.heading} id={VENDORS_TITLE_ID}>
          Салоны рядом
        </h2>

        {vendor.process.vendors === ProcessEnum.REQUESTED && (
          <p>Загружаем данные...</p>
        )}

        {vendor.process.vendors === ProcessEnum.ERROR && (
          <p>Не удалось загрузить данные</p>
        )}

        <IconButton
          aria-label="Включить фильтр"
          onClick={() => {
            console.log('Filter clicked');
          }}
        >
          <FilterIcon />
        </IconButton>
      </div>

      {vendor.process.vendors === ProcessEnum.SUCCESS && (
        <VendorListContent list={vendor.data.list} />
      )}
    </section>
  );
};
