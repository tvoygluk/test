import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/Button';
import { ChevronIcon } from 'common/icons';

import style from './style.scss';

interface IVendorCheckInProps {
  className?: string;
  isExpanded: boolean;
  onToggle: () => void;
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

export const VendorCheckIn: React.FC<IVendorCheckInProps> = ({
  className,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={classNames(style.root, className, {
        [style.isExpanded]: isExpanded,
      })}
    >
      <div className={style.header}>
        <Button
          className={style.toggle}
          aria-expanded={isExpanded}
          onClick={onToggle}
        >
          <span className={style.toggleLabel}>Свободное время на сегодня</span>
          <ChevronIcon className={style.chevron} />
        </Button>
      </div>

      {isExpanded && (
        <div className={style.timeGrid}>
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
      )}
    </div>
  );
};

VendorCheckIn.displayName = 'Vendor-CheckIn';
