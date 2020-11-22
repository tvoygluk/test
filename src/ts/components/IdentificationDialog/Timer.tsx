/* eslint-disable import/no-cycle */
import { useSession } from 'store/session';
import React, { useEffect, useState, useContext } from 'react';
import { Context } from './self';

import style from './style.scss';

interface IIdentificationDialogTimerProps {
  reRunTimer: boolean;
}

export const IdentificationDialogTimer:
  React.FC<IIdentificationDialogTimerProps> = ({
    reRunTimer,
  }) => {
    const { session } = useSession();
    const [waitingTime, setWaitingTime] = useState<number>(session.data.timeoutSeconds);

    useEffect(() => {
      setWaitingTime(session.data.timeoutSeconds);
    }, [session.data.timeoutSeconds]);

    const { setCodeApprovedStatus } = useContext(Context);
    const [timeLeft, setTimeLeft] = useState<number>(waitingTime);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number | string>(0);

    useEffect(() => {
      setTimeLeft(waitingTime);
    }, [reRunTimer]);

    useEffect(() => {
      setCodeApprovedStatus(true);
      if (!timeLeft) {
        setSeconds('00');
        setCodeApprovedStatus(false);
        return;
      }

      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      setMinutes(Math.floor((timeLeft / 60) % 60));
      setSeconds((`0${Math.floor(timeLeft % 60).toString()}`).slice(-2));

      return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
      <p className={style.timer}>
        <span className={style.timerLegend}>Осталось:</span>
        <span className={style.timerValue}>
          {minutes}
          :
          {seconds}
        </span>
      </p>
    );
  };
