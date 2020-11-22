import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { IconButton } from 'common/IconButton';
import { MenuIcon } from 'common/icons';
import { LogoLink } from 'components/LogoLink';
import { ROUTES } from 'ts/constants';

import { AppHeaderBackButton } from './BackButton';
import { AppHeaderOwnerButton } from './OwnerButton';
import { AppHeaderUserBar } from './UserBar';

import style from './style.scss';

interface IAppHeaderProps {
  className?: string;
  isMenuButtonDisabled: boolean;
  onMenuButtonClick: () => void;
}

/**
 * TODO: make menu button inclusive
 * @see {@link https://inclusive-components.design/menus-menu-buttons/}
 */

export const AppHeader: React.FC<IAppHeaderProps> = ({
  className,
  isMenuButtonDisabled,
  onMenuButtonClick,
}) => {
  const location = useLocation();

  const handleOwnerButtonClick = () => {
    console.log('Clicked: owner button');
  };

  const renderLogo = () => (
    location.pathname === ROUTES.HOME ? (
      <h1 className={style.logo}>
        <LogoLink />
      </h1>
    ) : <LogoLink className={style.logo} />
  );

  // FIXME: add correct pathname matching for dynamic route
  const renderNavigation = (): React.ReactNode => {
    switch (location.pathname) {
      case ROUTES.VENDOR_ITEM:
        return <AppHeaderBackButton />;

      default:
        return (
          <>
            <IconButton
              className={style.menuButton}
              disabled={isMenuButtonDisabled}
              aria-label="Открыть меню"
              onClick={onMenuButtonClick}
            >
              <MenuIcon />
            </IconButton>

            {renderLogo()}
          </>
        );
    }
  };

  return (
    <header className={classNames(style.root, className)}>
      {renderNavigation()}

      <div className={style.owner}>
        <AppHeaderOwnerButton onClick={handleOwnerButtonClick} />
      </div>

      <div className={style.userBar}>
        <AppHeaderUserBar />
      </div>
    </header>
  );
};
