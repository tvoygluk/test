import React from 'react';
import classNames from 'classnames';

import { LogoutButton } from 'components/LogoutButton';

import style from './style.scss';

interface IAppHeaderUserDropdownMenuProps {
  className?: string;
}

const USER_MENU_ITEMS = ['Профиль', 'Настройки'];

export const AppHeaderUserDropdownMenu: React.FC<IAppHeaderUserDropdownMenuProps> = ({
  className,
}) => {
  return (
    <div className={classNames(style.root, className)}>
      <ul className={style.list}>
        {USER_MENU_ITEMS.map((item) => <li key={item} className={style.item}>{item}</li>)}
        <li className={style.item_last}>
          <LogoutButton
            className={style.button}
            iconClassName={style.buttonIcon}
            labelClassName={style.buttonLabel}
          />
        </li>
      </ul>
      <span className={style.triangle} aria-hidden="true" />
    </div>
  );
};
