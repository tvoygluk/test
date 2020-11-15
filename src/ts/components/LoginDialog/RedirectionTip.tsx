import React from 'react';

import { Button } from 'common/Button';

import style from './style.scss';

interface IRedirectionTipProps {
  action: string;
  question: string;
  onClick: () => void;
}

export const LoginDialogRedirectionTip: React.FC<IRedirectionTipProps> = ({
  action,
  question,
  onClick,
}) => {
  return (
    <p className={style.redirectionTip}>
      {`${question} `}
      <Button className={style.redirectionButton} onClick={onClick}>{action}</Button>
    </p>
  );
};
