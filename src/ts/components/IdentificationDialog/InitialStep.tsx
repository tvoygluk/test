import React, { useEffect, useState } from 'react';

import { Input } from 'common/Input';

// eslint-disable-next-line import/no-cycle
import { IdentificationDialog } from 'components/IdentificationDialog/self';
import { IdentificationDialogHeader } from './Header';
import { IdentificationDialogRedirectionTip } from './RedirectionTip';
import { IdentificationDialogSubmitButton } from './SubmitButton';
import type { ChangeHandler, IActivatable } from './types';

import { useModal } from 'store/modal';
import { useSession } from 'store/session';

import style from './style.scss';

interface IIdentificationDialogInitialStepProps extends IActivatable {
  name: string;
  phone: string;
  onNameChange: ChangeHandler;
  onPhoneChange: ChangeHandler;
  isLoginDialog: boolean;
}

export const IdentificationDialogInitialStep: React.FC<IIdentificationDialogInitialStepProps> = ({
  name,
  phone,
  isActive,
  onNameChange,
  onPhoneChange,
  isLoginDialog,
}) => {
  const { modalActions } = useModal();
  const { session } = useSession();
  const [triggerUncorrectPhone, setTriggerUncorrectPhone] = useState<boolean>(false);
  const [triggerUncorrectName, setTriggerUncorrectName] = useState<boolean>(false);

  useEffect(() => {
    if (session.data.messages.length) {
      setTriggerUncorrectPhone(Boolean(session.data.messages.length));
    }
  }, [session.data.messages.length, session.process.create]);

  const isPhoneInvalid: boolean = triggerUncorrectPhone && phone !== '' && session.process.create !== 'REQUESTED';

  return (
    <>
      <IdentificationDialogHeader
        caption={isLoginDialog ? 'Вход на сайт' : 'Быстрая регистрация'}
        captionTip="Заполните форму ниже"
      />
      <div className={style.inputGroup}>
        <Input
          className={style.input}
          placeholder="Имя"
          value={name}
          aria-label="Введите имя"
          pattern="[A-Za-zА-Яа-яЁё]+"
          onChange={(event) => {
            onNameChange(event.target.value);
            setTriggerUncorrectName(Boolean(event.target.value.match(/[^A-Za-zА-Яа-яЁё]/g)));
          }}
          isInvalid={triggerUncorrectName}
          hint={triggerUncorrectName ? 'Пожалуйста, введите корректное имя' : null}
        />
        <Input
          className={style.input}
          inputMode="tel"
          placeholder="Номер телефона"
          value={phone}
          aria-label="Введите номер телефона"
          onChange={(event) => {
            onPhoneChange(event.target.value);
            setTriggerUncorrectPhone(false);
          }}
          isInvalid={isPhoneInvalid}
          hint={isPhoneInvalid ? 'Пожалуйста, проверьте номер телефона' : null}
          isNumberFormat
          format="+# (###) ###-##-##"
          mask="_"
        />
      </div>
      <IdentificationDialogRedirectionTip
        action={isLoginDialog ? 'Регистрация' : 'Войти'}
        question={isLoginDialog ? 'Впервые на сайте?' : 'Уже есть аккуант?'}
        onClick={() => {
          modalActions.show(<IdentificationDialog isLoginDialog={!isLoginDialog} />);
        }}
      />
      <IdentificationDialogSubmitButton
        isActive={isActive}
        legend={isLoginDialog ? 'Войти' : 'Регистрация'}
      />
    </>
  );
};
