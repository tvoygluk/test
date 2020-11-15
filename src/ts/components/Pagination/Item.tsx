import React from 'react';

import { Button } from 'common/Button';

import style from './style.scss';

interface IPaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onClick: (num: number) => void;
}

export const PaginationItem: React.FC<IPaginationItemProps> = ({
  number,
  isCurrent = false,
  onClick,
}) => {
  const handleClick = React.useCallback(() => {
    onClick(number);
  }, [number, onClick]);

  return (
    <Button
      className={style[isCurrent ? 'item_current' : 'item']}
      disabled={isCurrent}
      onClick={handleClick}
    >
      {number}
    </Button>
  );
};
