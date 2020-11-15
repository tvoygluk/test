import React from 'react';
import classNames from 'classnames';

import avatarSrc from './images/avatar.png';

import style from './style.scss';

interface IAvatarProps {
  className?: string;
  userName: string;
  size?: number;
}

export const Avatar: React.FC<IAvatarProps> = ({
  className,
  size = 48,
  userName,
}) => {
  return (
    <img
      alt={userName}
      className={classNames(style.root, className)}
      src={avatarSrc}
      width={size}
      height={size}
    />
  );
};
