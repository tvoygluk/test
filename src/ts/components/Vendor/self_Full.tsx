import React from 'react';
import classNames from 'classnames';

import type { IVendor } from 'store/vendor';

import { VendorContent } from './Content';

import style from './style.scss';

interface IVendorFullProps {
  className?: string;
  data: IVendor;
}

export const VendorFull: React.FC<IVendorFullProps> = ({
  className,
  data,
}) => {
  return (
    <div className={classNames(style.root, className)}>
      <VendorContent data={data} isInner />
    </div>
  );
};
