import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { LogoImage } from 'ts/components/LogoImage';

import style from './style.scss';

type Props = {
  className?: string;
};

interface __FixMeRoutes__ {
  HOME: string;
}

export const LogoLink: React.FC<Props> = ({ className }) => {
  return (
    <Link className={classNames(style.root, className)} to={(ROUTES as __FixMeRoutes__).HOME}>
      <LogoImage />
    </Link>
  );
};
