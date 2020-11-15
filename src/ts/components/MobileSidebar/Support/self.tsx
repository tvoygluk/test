import React from 'react';

import { CallIcon, MessageIcon } from 'common/icons';
import type { IconProps } from 'common/icons';
import { LabelledButton } from 'components/LabelledButton';

import style from './style.scss';

interface IMobileSidebarSupportProps {
  className?: string;
  onCallClick: React.MouseEventHandler;
  onMessageClick: React.MouseEventHandler;
}

type ButtonEntry = [string, React.MouseEventHandler, React.FC<IconProps>];
type ButtonRenderer = (entry: ButtonEntry, key: number) => React.ReactNode;

export const MobileSidebarSupport: React.FC<IMobileSidebarSupportProps> = ({
  className,
  onCallClick,
  onMessageClick,
}) => {
  const renderButton: ButtonRenderer = ([label, onClick, Curve], key) => (
    <LabelledButton
      key={key}
      className={style.button}
      label={label}
      labelClassName={style.label}
      onClick={onClick}
    >
      <Curve noDefaultColor={false} />
    </LabelledButton>
  );

  const buttonEntries: ButtonEntry[] = [
    ['Сообщение', onMessageClick, CallIcon],
    ['Бесплатный звонок', onCallClick, MessageIcon],
  ];

  return (
    <div className={className}>
      <p className={style.caption}>Поддержка</p>
      <div className={style.group}>
        {buttonEntries.map((entry, i) => renderButton(entry, i))}
      </div>
    </div>
  );
};
