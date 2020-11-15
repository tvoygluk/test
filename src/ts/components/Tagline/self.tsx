import classNames from 'classnames';
import React from 'react';

import { TaglineItem } from './Item';

import style from './style.scss';

interface ITaglineProps {
  className?: string;
}

type Tag = string;

const mockedTags: Tag[] = ['Маникюр', 'Причёски', 'Брови', 'Лицо', 'Массаж'];

export const Tagline: React.FC<ITaglineProps> = ({ className }) => {
  const [activeTag, setActiveTag] = React.useState<Tag>('Маникюр');

  return (
    <div className={classNames(style.root, className)}>
      <div className={style.list}>
        {mockedTags.map((tag, i, arr) => (
          <TaglineItem
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
