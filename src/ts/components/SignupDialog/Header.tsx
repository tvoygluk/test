import React from 'react';

import style from './style.scss';

interface ILoginDialogHeaderProps {
  caption: string;
  captionTip: string;
}

export const LoginDialogHeader: React.FC<ILoginDialogHeaderProps> = ({ caption, captionTip }) => {
  return (
    <div className={style.header}>
      <p className={style.caption}>{caption}</p>
      <p className={style.captionTip}>{captionTip}</p>
    </div>
  );
};
