import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface IProps {
  className?: string;
}

export const Copyright: React.FC<IProps> = ({ className }) => {
  return (
    <p className={classNames(style.root, className)}>2020 &#169; LOOKAP</p>
  );
};
