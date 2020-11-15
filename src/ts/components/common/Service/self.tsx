import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface IServiceProps {
  service: string;
  className?: string;
}

export const Service: React.FC<IServiceProps> = ({
  service,
  className,
}) => {
  return (
    <div className={classNames(
      style.root,
      className,
    )}
    >
      {service}
    </div>
  );
};
