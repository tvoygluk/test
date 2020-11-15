import React, { useState } from 'react';
import classNames from 'classnames';

import type { IVendor } from 'store/vendor';

import { VendorContent } from './Content';

import style from './style.scss';

interface IVendorBriefProps {
  className?: string;
  data: IVendor;
}

export const VendorBrief: React.FC<IVendorBriefProps> = ({
  className,
  data,
}) => {
  const headingId = `vendor-heading-${data.id}`;

  const [isCheckInExpanded, setIsCheckInExpanded] = useState(false);

  return (
    <article
      className={classNames(style.root, className)}
      aria-labelledby={headingId}
    >
      <VendorContent
        data={data}
        isCheckInExpaded={isCheckInExpanded}
        onCheckInToggle={() => {
          setIsCheckInExpanded((prev) => !prev);
        }}
      />
    </article>
  );
};
