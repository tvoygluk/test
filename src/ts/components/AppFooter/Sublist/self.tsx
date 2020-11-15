import React from 'react';

import style from './style.scss';

interface IProps {
  items: string[];
  title: string;
}

export const AppFooterSublist: React.FC<IProps> = ({ title, items }) => {
  return (
    <li>
      <p className={style.title}>{title}</p>
      <ul className={style.list}>
        {items.map((item, i, arr) => (
          <li
            key={item}
            className={style[i === arr.length - 1 ? 'item_last' : 'item']}
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};
