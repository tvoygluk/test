import React from 'react';
import classNames from 'classnames';

import type { IVendor } from 'store/vendor';

import { VendorContent } from './Content';

import style from './style.scss';

interface IFullVendorProps {
  className?: string;
  data: IVendor;
}

export const FullVendor: React.FC<IFullVendorProps> = ({
  className,
  data,
}) => {
  return (
    <div className={classNames(style.root, className)}>
      <VendorContent data={data} />
    </div>
  );
};

FullVendor.displayName = 'Vendor_full';
