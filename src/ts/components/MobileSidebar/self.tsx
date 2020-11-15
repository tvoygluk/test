import React from 'react';

import { IconButton } from 'common/IconButton';
import { CloseIcon } from 'common/icons';
import { Copyright } from 'components/Copyright';

import { MobileSidebarSupport } from './Support';
import { MobileSidebarUserBar } from './UserBar';

import style from './style.scss';

interface IMobileSidebarProps {
  onCloseButtonClick: () => void;
}

export const MobileSidebar: React.FC<IMobileSidebarProps> = ({ onCloseButtonClick }) => {
  const handleClickStub = (evt: React.SyntheticEvent) => {
    console.log(`Clicked: ${(evt.target as HTMLElement).textContent as string}`);
  };

  return (
    <nav
      className={style.root}
    >
      <IconButton
        className={style.closeButton}
        aria-label="Закрыть меню"
        onClick={onCloseButtonClick}
      >
        <CloseIcon />
      </IconButton>
      <MobileSidebarUserBar className={style.userBar} />
      <div className={style.owner}>
        <span className={style.ownerLegend}>Владельцам салонов</span>
      </div>
      <MobileSidebarSupport
        className={style.support}
        onCallClick={handleClickStub}
        onMessageClick={handleClickStub}
      />
      <Copyright className={style.copyright} />
    </nav>
  );
};
