import React from 'react';

import style from './style.scss';

interface IIdentificationDialogHeaderProps {
  caption: string;
  captionTip: string;
}

export const IdentificationDialogHeader: React.FC<IIdentificationDialogHeaderProps> = ({
  caption,
  captionTip,
}) => {
  return (
    <div className={style.header}>
      <p className={style.caption}>{caption}</p>
      <p className={style.captionTip}>{captionTip}</p>
    </div>
  );
};

IdentificationDialogHeader.displayName = 'IdentificationDialog-Header';
