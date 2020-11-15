import React from 'react';
import classNames from 'classnames';

import { Image } from 'common/Image';

import logoImageSrc from './img/logo.svg';

import style from './style.scss';

interface ILogoImageProps {
  className?: string;
}

enum LogoImageDefaultSize {
  WIDTH = 87,
  HEIGHT = 15,
}

export const LogoImage: React.FC<ILogoImageProps> = ({ className }) => {
  return (
    <Image
      className={classNames(style.root, className)}
      srcList={[logoImageSrc]}
      alt="LOOKAP"
      width={LogoImageDefaultSize.WIDTH}
      height={LogoImageDefaultSize.HEIGHT}
    />
  );
};

LogoImage.displayName = 'LogoImage';
