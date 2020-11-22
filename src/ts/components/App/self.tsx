import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { AppHeader } from 'components/AppHeader';
import { AppFooter } from 'components/AppFooter';
import { AppModal } from 'components/AppModal';
import { MobileSidebar } from 'components/MobileSidebar';
import { PageSwitcher } from 'components/pages';
import { useSession } from 'store/session';

import style from './style.scss';

export const App: React.FC = () => {
  const [isNavMenuExpanded, setIsNavMenuExpanded] = useState(false);

  const { sessionActions } = useSession();

  useEffect(() => {
    sessionActions.check();
  }, [sessionActions]);

  const handleMenuButtonClick = () => {
    setIsNavMenuExpanded(true);
  };

  const handleCloseButtonClick = () => {
    setIsNavMenuExpanded(false);
  };

  return (
    <div
      className={classNames(style.root, 'Page-App', {
        [style.isSidebarExpanded]: isNavMenuExpanded,
      })}
    >
      <div className={style.macroLayout}>
        <div className={style.sidebarColumn}>
          <MobileSidebar onCloseButtonClick={handleCloseButtonClick} />
        </div>
        <div className={style.primaryColumn}>
          <div className={style.scrollBox}>
            <div className={style.scrollContent}>
              <AppHeader
                className={style.header}
                isMenuButtonDisabled={isNavMenuExpanded}
                onMenuButtonClick={handleMenuButtonClick}
              />
              <PageSwitcher />
              <AppFooter className={style.footer} />
            </div>
          </div>
        </div>
      </div>
      <AppModal className={style.modal} />
    </div>
  );
};
