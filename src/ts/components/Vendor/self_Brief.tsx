import React from 'react';
import classNames from 'classnames';

import type { IVendor } from 'store/vendor';

import { VendorContent } from './Content';

import style from './style.scss';

interface IBriefVendorProps {
  className?: string;
  data: IVendor;
}

export const BriefVendor: React.FC<IBriefVendorProps> = ({
  className,
  data,
}) => {
  const headingId = `vendor-heading-${data.id}`;

  return (
    <article
      className={classNames(style.root, className)}
      aria-labelledby={headingId}
    >
      <VendorContent data={data} isBrief />
    </article>
  );
};

BriefVendor.displayName = 'Vendor_brief';
