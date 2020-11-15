import React from 'react';

import { Input } from 'common/Input';

import { LoginDialogHeader } from './Header';
import { LoginDialogRedirectionTip } from './RedirectionTip';
import { LoginDialogSubmitButton } from './SubmitButton';
import type { ChangeHandler, IActivatable } from './types';

import { useModal } from 'store/modal';

import style from './style.scss';
import { LoginDialog } from '../LoginDialog';

interface ILoginDialogInitialStepProps extends IActivatable {
  name: string;
  phone: string;
  onNameChange: ChangeHandler;
  onPhoneChange: ChangeHandler;
}
// TODO: ММ: корневой компонент для логина (Переделать для авторизации??)
export const LoginDialogInitialStep: React.FC<ILoginDialogInitialStepProps> = ({
  name,
  phone,
  isActive,
  onNameChange,
  onPhoneChange,
}) => {
    // TODO: ММ: у modalActions есть 2 метода: show и hide
  const { modalActions } = useModal();

  return (
    <>
      <LoginDialogHeader
        caption="Быстрая регистрация"
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
        action="Войти"
        question="Уже есть аккуант?"
        // TODO: ММ: Правильно ли делать такой переход?
        onClick={() => {
          modalActions.show(<LoginDialog />);
        }}
        // onClick={() => {
        //   console.log('Move to Login');
        // }}
      />
      <LoginDialogSubmitButton
        isActive={isActive}
        legend="Регистрация"
      />
    </>
  );
};
