import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/Button';
import { LogoLink } from 'components/LogoLink';

import style from './style.scss';
import { IdentificationDialog } from '../self';
import { useModal } from '@/ts/store/modal/useModal';

interface IIdentificationDialogAdvantagesProps {
  className?: string;
  isLoginDialog: boolean;
  isDisableButton: boolean;
}

const ADVANTAGES = [
  'Персональные скидки и акции',
  'Напоминания о предстоящей записи',
  'Возможность оставлять отзывы',
  'Возможность добавлять салоны',
];

export const IdentificationDialogAdvantages: React.FC<IIdentificationDialogAdvantagesProps> = ({
  className,
  isLoginDialog,
  isDisableButton,
}) => {
  const { modalActions } = useModal();
  return (
    <div className={classNames(
      style.root,
      {
        [style.singUpDialog]: !isLoginDialog,
      },
      className,
    )}
    >
      <div className={style.header}>
        <LogoLink className={style.logo} />
        <p className={style.slogan}>Красота вокруг нас</p>
      </div>
      <div className={style.body}>
        <p className={style.caption}>Регистрируясь, вы получаете</p>
        <ul className={style.list}>
          {ADVANTAGES.map((it, i) => (
            <li key={i} className={style.item}>{it}</li>
          ))}
        </ul>
      </div>
      {
        isLoginDialog
          ? (
            <Button
              className={style.singUpDialogButton}
              variant="transparent"
              onClick={() => {
                modalActions.show(<IdentificationDialog isLoginDialog={!isLoginDialog} />);
              }}
              disabled={isDisableButton}
            >
              Регистрация
            </Button>
          )
          : null
      }
    </div>
  );
};

IdentificationDialogAdvantages.displayName = 'IdentificationDialog-Advantages';
