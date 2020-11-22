import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { LogoImage } from 'ts/components/LogoImage';

import style from './style.scss';

interface ILogoLinkProps {
  className?: string;
}

export const LogoLink: React.FC<ILogoLinkProps> = ({ className }) => (
  <Link className={classNames(style.root, className)} to={ROUTES.HOME}>
    <LogoImage />
  </Link>
);
