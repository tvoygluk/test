import React from 'react';

import { Input } from 'common/Input';

import { LoginDialogHeader } from './Header';
import { LoginDialogRedirectionTip } from './RedirectionTip';
import { LoginDialogSubmitButton } from './SubmitButton';
import type { ChangeHandler, IActivatable } from './types';

import style from './style.scss';

interface ILoginDialogInitialStepProps extends IActivatable {
  name: string;
  phone: string;
  onNameChange: ChangeHandler;
  onPhoneChange: ChangeHandler;
}

export const LoginDialogInitialStep: React.FC<ILoginDialogInitialStepProps> = ({
  name,
  phone,
  isActive,
  onNameChange,
  onPhoneChange,
}) => {
  return (
    <>
      <LoginDialogHeader
        caption="Вход на сайт"
        captionTip="Заполните форму ниже"
      />
      <div className={style.inputGroup}>
        <Input
          className={style.input}
          placeholder="Имя"
          value={name}
          aria-label="Введите имя"
          onChange={(event) => {
            onNameChange(event.target.value);
          }}
        />
        <Input
          className={style.input}
          inputMode="tel"
          placeholder="Номер телефона"
          value={phone}
          aria-label="Введите номер телефона"
          onChange={(event) => {
            onPhoneChange(event.target.value);
          }}
        />
      </div>
      <LoginDialogRedirectionTip
        action="Регистрация"
        question="Впервые на сайте?"
        onClick={() => {
          console.log('Move to Sing Up');
        }}
      />
      <LoginDialogSubmitButton
        isActive={isActive}
        legend="Войти"
      />
    </>
  );
};
