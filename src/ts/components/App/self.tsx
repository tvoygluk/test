import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { AppHeader } from 'components/AppHeader';
import { AppFooter } from 'components/AppFooter';
import { AppModal } from 'components/AppModal';
import { MobileSidebar } from 'components/MobileSidebar';
import { PageSwitcher } from 'components/pages';
import { useSession } from 'store/session';

import style from './style.scss';
import { Link } from 'react-router-dom';

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
              <Link to="/storybook">
                <button style={{ width: 100 }}>To storybook</button>
              </Link>
              <Link to="/vendor/879106fa-3815-4c02-18d2-08d83c648921">
                <button style={{ width: 100 }}>To vendor</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AppModal className={style.modal} />
    </div>
  );
};
