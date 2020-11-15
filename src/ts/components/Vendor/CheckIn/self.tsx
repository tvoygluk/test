import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/Button';

import style from './style.scss';

interface IVendorCheckInProps {
  className?: string;
}

const mockedTimeList = [
  '14:30',
  '14:45',
  '15:00',
  '15:15',
  '15:45',
  '16:00',
  '16:10',
  '16:20',
];

export const VendorCheckIn: React.FC<IVendorCheckInProps> = ({ className }) => {
  return (
    <div className={classNames(style.root, className)}>
      <div className={style.header}>
        <p className={style.caption}>Свободное время на сегодня</p>
        {/* TODO: add icon with chevron */}
      </div>
      <div className={style.timegrid}>
        <ol className={style.list}>
          {mockedTimeList.map((time) => (
            <li key={time} className={style.item}>
              <Button className={style.time}>
                {time}
              </Button>
            </li>
          ))}
        </ol>
      </div>
      <Button
        className={style.button}
        isBlack
      >
        Записаться
      </Button>
    </div>
  );
};
