import classNames from 'classnames';
import React from 'react';

import { TagListItem } from './Item';

import style from './style.scss';

interface ITagListProps {
  className?: string;
}

type Tag = string;

const mockedTags: Tag[] = ['Маникюр', 'Причёски', 'Брови', 'Лицо', 'Массаж'];

export const TagList: React.FC<ITagListProps> = ({ className }) => {
  const [activeTag, setActiveTag] = React.useState<Tag>('Маникюр');

  return (
    <div className={classNames(style.root, className)}>
      <div className={style.list}>
        {mockedTags.map((tag, i, arr) => (
          <TagListItem
            key={tag}
            tag={tag}
            isActive={tag === activeTag}
            isLast={i === arr.length - 1}
            onClick={setActiveTag}
          />
        ))}
      </div>
    </div>
  );
};
