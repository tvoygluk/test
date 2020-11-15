import classNames from 'classnames';
import React from 'react';

import { Button } from 'common/Button';

import style from './style.scss';

interface ITagListItemProps {
  tag: string;
  isActive: boolean;
  isLast: boolean;
  onClick: (tag: string) => void;
}

export const TagListItem: React.FC<ITagListItemProps> = ({
  tag,
  isActive,
  isLast,
  onClick,
}) => {
  const handleClick = React.useCallback(() => {
    onClick(tag);
  }, [tag, onClick]);

  return (
    <Button
      key={tag}
      className={classNames(style.item, {
        [style.item_active]: isActive,
        [style.item_last]: isLast,
      })}
      disabled={isActive}
      onClick={handleClick}
    >
      {tag}
    </Button>
  );
};
