import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/Button';
import { MarkerIcon } from 'common/icons';

import type { IVendor } from 'store/vendor';

import style from './style.scss';

type VendorGeographyData = Pick<
  IVendor,
  'address' | 'distance' | 'geoPositionLatitude' | 'geoPositionLongitude'
>;

interface IVendorGeographyProps {
  className?: string;
  data: VendorGeographyData;
}

export const VendorGeography: React.FC<IVendorGeographyProps> = ({ className, data }) => {
  const { address, distance } = data;

  return (
    <div className={classNames(style.root, className)}>
      <span className={style.address}>{address}</span>
      <span className={style.separator} role="separator">.</span>
      <span className={style.distance}>{distance}</span>
      <Button className={style.show}>
        <MarkerIcon className={style.marker} color="#1c76db" />
        Показать на карте
      </Button>
    </div>
  );
};
