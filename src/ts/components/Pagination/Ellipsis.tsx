import React from 'react';

import { Button } from 'common/Button';

import style from './style.scss';

interface IPaginationEllipsisProps {
  onClick: () => void;
}

// TODO: maybe make as subtype of PaginationItem
export const PaginationEllipsis: React.FC<IPaginationEllipsisProps> = ({ onClick }) => {
  return (
    <Button className={style.item} onClick={onClick}>...</Button>
  );
};
