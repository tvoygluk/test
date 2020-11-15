import React from 'react';

import style from './style.scss';

interface ILoginDialogTimerProps {
  time: string;
}

export const LoginDialogTimer: React.FC<ILoginDialogTimerProps> = ({ time }) => {
  return (
    <p className={style.timer}>
      <span className={style.timerLegend}>Осталось:</span>
      <span className={style.timerValue}>{time}</span>
    </p>
  );
};
