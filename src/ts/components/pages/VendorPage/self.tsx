import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProcessEnum } from 'ts/constants';
import { FullVendor } from 'components/Vendor';
import { useVendor } from 'store/vendor';

import style from './style.scss';

interface IVendorRouteParams {
  id: string;
}

// TODO: add skeleton preloader

export const VendorPage: React.FC = () => {
  const { id } = useParams<IVendorRouteParams>();

  const { vendor, vendorActions } = useVendor();

  useEffect(() => {
    vendorActions.getVendorById(id);
  }, [vendorActions, id]);

  const currentVendor = vendor.data.current;

  return (
    <main className={style.root}>
      <div className={style.container}>
        {vendor.process.vendorById === ProcessEnum.REQUESTED && (
          <p className={style.message}>Загружаем данные...</p>
        )}

        {vendor.process.vendorById === ProcessEnum.ERROR && (
          <p className={style.message}>Не удалось загрузить данные</p>
        )}

        {vendor.process.vendorById === ProcessEnum.SUCCESS && (
          currentVendor ? (
            <FullVendor className={style.content} data={currentVendor} />
          ) : (
            <p className={style.message}>Нет данных по выбранному салону</p>
          )
        )}
      </div>
    </main>
  );
};
