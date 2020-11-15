import React, { useState } from 'react';
import classNames from 'classnames';

import { IconButton } from 'common/IconButton';
import { ChevronIcon, ProfileIcon, SignupIcon } from 'common/icons';
import { LabelledButton } from 'components/LabelledButton';
import { LoginButton } from 'components/LoginButton';
import { SignupButton } from 'components/SignupButton';
import { LogoutButton } from 'components/LogoutButton';
import { Avatar } from 'common/Avatar';

import style from './style.scss';

interface IMobileSidebarProfileProps {
  className?: string;
  userName: string;
  isLoggedIn: boolean;
}

const AVATAR_SIZE = 34;

export const MobileSidebarProfile: React.FC<IMobileSidebarProfileProps> = ({
  className,
  userName,
  isLoggedIn,
}) => {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const chevronIconButton = (
    <IconButton
      className={style.expandButton}
      aria-label="Меню пользователя"
      aria-expanded={isProfileExpanded}
      onClick={() => {
        setIsProfileExpanded((prevState) => !prevState);
      }}
    >
      <ChevronIcon />
    </IconButton>
  );

  return (
    <div
      className={classNames(style.root, className, {
        [style.isExpanded]: isProfileExpanded,
      })}
    >
      <div className={style.body}>
        {
          isLoggedIn ? (
            <>
              <Avatar
                className={style.avatar}
                size={AVATAR_SIZE}
                userName={userName}
              />
              <span className={style.name}>
                {userName}
              </span>
            </>
          ) : (
            <div className={style.avatarStub} aria-hidden="true">
              <ProfileIcon className={style.avatarStubIcon} />
            </div>
          )
        }

        {chevronIconButton}
      </div>

      {isProfileExpanded && (
        <div className={style.dropdown}>
          {
            isLoggedIn ? (
              <>
                <LabelledButton
                  className={style.dropdownButton}
                  labelClassName={style.dropdownLegend}
                  label="Профиль"
                >
                  <ProfileIcon className={style.icon} />
                </LabelledButton>

                <LogoutButton
                  className={style.dropdownButton}
                  iconClassName={style.icon}
                  labelClassName={style.dropdownLegend}
                  onLogout={() => {
                    setIsProfileExpanded(false);
                  }}
                />
              </>
            ) : (
              <>
                <LoginButton
                  iconClassName={style.icon}
                  labelClassName={style.dropdownLegend}
                  onLogin={() => {
                    setIsProfileExpanded(false);
                  }}
                />
                {/* TODO: ММ: SignupButton - временный дубликат LoginButton, для вывода SignupDialog */}
                <SignupButton
                  iconClassName={style.icon}
                  labelClassName={style.dropdownLegend}
                  onLogin={() => {
                    setIsProfileExpanded(false);
                  }}
                />
                {/* <LabelledButton */}
                {/*  className={style.dropdownButton} */}
                {/*  labelClassName={style.dropdownLegend} */}
                {/*  label="Зарегистрироваться" */}
                {/* > */}
                {/*  <SignupIcon className={style.icon} /> */}
                {/* </LabelledButton> */}
              </>
            )
          }
        </div>
      )}
    </div>
  );
};
