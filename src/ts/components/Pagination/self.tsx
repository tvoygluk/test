import React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';

import { PaginationEllipsis } from './Ellipsis';
import { PaginationItem } from './Item';

import style from './style.scss';

interface IPaginationProps {
  amount: number;
  className?: string;
}

const AMOUNT_OF_EXPLICIT = 4;

export const Pagination: React.FC<IPaginationProps> = ({ amount, className }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const numberList = new Array(AMOUNT_OF_EXPLICIT).fill(null).map((_, i) => i + 1);

  const handlePageClick = React.useCallback((number) => {
    setCurrentPage(number);
  }, []);

  return (
    <div className={classNames(style.root, className)}>
      {numberList.map((number) => (
        <PaginationItem
          key={number}
          number={number}
          isCurrent={number === currentPage}
          onClick={handlePageClick}
        />
      ))}
      <PaginationEllipsis onClick={noop} />
      <PaginationItem number={amount} onClick={noop} />
    </div>
  );
};
