import React from 'react';

import { Button } from 'common/Button';

import style from './style.scss';

interface IAppHeaderOwnerButtonProps {
  onClick: () => void;
}

export const AppHeaderOwnerButton: React.FC<IAppHeaderOwnerButtonProps> = ({ onClick }) => {
  return (
    <>
      <Button
        className={style.mobileRoot}
        onClick={onClick}
      >
        Владельцам салонов
      </Button>
      <Button
        className={style.desktopRoot}
        onClick={onClick}
      >
        <span className={style.subtitle}>Вы владелец салона?</span>
        <span className={style.title}>Добавьте Ваш салон</span>
      </Button>
    </>
  );
};
