import React from 'react';

import { ChevronIcon } from 'common/icons';
import { LabelledButton } from 'common/LabelledButton';

import style from './style.scss';

interface IAppHeaderBackButtonProps {
  className?: string;
}

export const AppHeaderBackButton: React.FC<IAppHeaderBackButtonProps> = ({ className }) => {
  return (
    <LabelledButton
      className={className}
      label="Назад"
      labelClassName={style.backLabel}
    >
      <ChevronIcon className={style.backIcon} />
    </LabelledButton>
  );
};

AppHeaderBackButton.displayName = 'AppHeader-BackButton';
