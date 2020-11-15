import React from 'react';
import classNames from 'classnames';

import type { IVendor } from 'store/vendor';

import { VendorContent } from './Content';
import type { VendorHeadingLevelType } from './types';

import style from './style.scss';

interface IVendorProps {
  className?: string;
  data: IVendor;
  headingLevel?: VendorHeadingLevelType;
  isArticle?: boolean;
}

export const Vendor: React.FC<IVendorProps> = ({
  className,
  data,
  headingLevel = 2,
  isArticle = false,
}) => {
  const rootClassName = classNames(style.root, className);

  if (isArticle) {
    const headingId = `vendor-heading-${data.id}`;

    return (
      <article className={rootClassName} aria-labelledby={headingId}>
        <VendorContent
          data={data}
          headingId={headingId}
          headingLevel={headingLevel}
        />
      </article>
    );
  }

  return (
    <div className={rootClassName}>
      <VendorContent data={data} />
    </div>
  );
};
