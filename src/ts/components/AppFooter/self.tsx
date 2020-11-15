import React from 'react';

import { Copyright } from 'components/Copyright';

import { AppFooterSublist } from './Sublist';
import style from './style.scss';

const mockItems = [
  {
    title: 'О нас',
    items: ['Миссия', 'Контакты'],
  },
  {
    title: 'Салонам',
    items: ['Партнёрство', 'Соглашения'],
  },
  {
    title: 'Клиентам',
    items: ['Поддержка', 'Отзывы'],
  },
];

interface IProps {
  className?: string;
}

export const AppFooter: React.FC<IProps> = ({ className }) => {
  return (
    <footer className={className === '' ? undefined : className}>
      <div className={style.top}>
        <div className={style.container}>
          <ul className={style.list}>
            {mockItems.map((item) => (
              <AppFooterSublist key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.container}>
          <Copyright className={style.copyright} />
        </div>
      </div>
    </footer>
  );
};
