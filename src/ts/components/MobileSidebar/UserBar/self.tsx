import React from 'react';
import classNames from 'classnames';

import { useSession } from 'store/session';

import { MobileSidebarProfile } from '../Profile';

import style from './style.scss';

interface IMobileSidebarUserBarProps {
  className?: string;
}

export const USER_MENU = [
  'Мои записи',
  'Любимые салоны',
  'Получить подарок',
];

export const MobileSidebarUserBar: React.FC<IMobileSidebarUserBarProps> = ({ className }) => {
  const { session } = useSession();

  const isLoggedIn = session.data.approved;

  return (
    <div className={classNames(style.root, className)}>
      <MobileSidebarProfile
        userName={session.data.customerName}
        isLoggedIn={isLoggedIn}
      />

      {isLoggedIn && (
        <div className={style.menuPanel}>
          <ul className={style.menuList}>
            {USER_MENU.map((it, i) => <li className={style.menuItem} key={i}>{it}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};
