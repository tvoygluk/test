import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/Button';
import { LogoLink } from 'components/LogoLink';

import style from './style.scss';

interface ILoginDialogAdvantagesFeaturesProps {
  className?: string;
}

const ADVANTAGES = [
  'Персональные скидки и акции',
  'Напоминания о предстоящей записи',
  'Возможность оставлять отзывы',
  'Возможность добавлять салоны',
];

export const LoginDialogAdvantages: React.FC<ILoginDialogAdvantagesFeaturesProps> = ({
  className,
}) => {
  return (
    <div className={classNames(style.root, className)}>
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
      <Button isTransparent>
        Регистрация
      </Button>
    </div>
  );
};
