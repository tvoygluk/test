import React from 'react';

import { LikeIcon, ScheduleIcon } from 'common/icons';
import { Avatar } from 'common/Avatar';
import { LabelledButton } from 'components/LabelledButton';
import { LoginButton } from 'components/LoginButton';
import { useSession } from 'store/session';
import { ProcessEnum } from 'ts/constants';

import { AppHeaderUserDropdownMenu } from '../UserDropdownMenu';
import { AppHeaderUserBarSkeleton } from './Skeleton';

import style from './style.scss';

// TODO: replace buttons with router links

export const AppHeaderUserBar: React.FC = () => {
  const { session } = useSession();

  const isCheckRequested = session.process.check === ProcessEnum.REQUESTED;
  const isCheckSuccess = session.process.check === ProcessEnum.SUCCESS;
  const isCheckError = session.process.check === ProcessEnum.ERROR;

  return (
    <nav className={style.root} role={isCheckRequested ? 'status' : undefined}>
      {isCheckRequested && (
        <AppHeaderUserBarSkeleton />
      )}
      {(isCheckSuccess || isCheckError) && (
        session.data.approved ? (
          <>
            <LabelledButton
              label="Мои записи"
              onClick={() => {
                console.log('Schedule button clicked');
              }}
            >
              <ScheduleIcon noDefaultColor={false} />
            </LabelledButton>

            <LabelledButton
              label="Любимые салоны"
              onClick={() => {
                console.log('Like button clicked');
              }}
            >
              <LikeIcon paint="unfilled" />
            </LabelledButton>

            <div className={style.profile}>
              <Avatar
                className={style.profileAvatar}
                userName={session.data.customerName}
              />
              <div className={style.dropdown}>
                <AppHeaderUserDropdownMenu />
              </div>
            </div>
          </>
        ) : (
          <LoginButton labelClassName={style.loginButtonLabel} />
        )
      )}
    </nav>
  );
};
