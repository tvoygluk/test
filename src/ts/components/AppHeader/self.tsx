import React from 'react';
import classNames from 'classnames';

import { IconButton } from 'common/IconButton';
import { MenuIcon } from 'common/icons';
import { LogoLink } from 'components/LogoLink';

import { AppHeaderOwnerButton } from './OwnerButton';
import { AppHeaderUserBar } from './UserBar';

import style from './style.scss';

interface IAppHeaderProps {
  className?: string;
  isMenuButtonDisabled: boolean;
  onMenuButtonClick: () => void;
}

export const AppHeader: React.FC<IAppHeaderProps> = ({
  className,
  isMenuButtonDisabled,
  onMenuButtonClick,
}) => {
  const handleOwnerButtonClick = () => {
    console.log('Clicked: owner button');
  };

  // TODO: make menu button inclusive

  return (
    <header className={classNames(style.root, className)}>
      <IconButton
        className={style.menuButton}
        disabled={isMenuButtonDisabled}
        aria-label="Открыть меню"
        onClick={onMenuButtonClick}
      >
        <MenuIcon />
      </IconButton>
      <h1 className={style.logo}>
        <LogoLink />
      </h1>
      <div className={style.owner}>
        <AppHeaderOwnerButton onClick={handleOwnerButtonClick} />
      </div>
      <div className={style.userBar}>
        <AppHeaderUserBar />
      </div>
    </header>
  );
};
