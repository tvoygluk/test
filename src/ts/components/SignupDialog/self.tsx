import React, { useState } from 'react';
import noop from 'lodash/noop';

import { ProcessEnum } from 'ts/constants';
import { useSession } from 'store/session';

import { LoginDialogAdvantages } from './Advantages';
import { LoginDialogFinalStep } from './FinalStep';
import { LoginDialogInitialStep } from './InitialStep';

import style from './style.scss';

interface ILoginDialogFieldsState {
  name: string;
  phone: string;
  code: string;
}

const INITIAL_FIELDS_STATE = {
  name: '',
  phone: '',
  code: '',
};

// TODO: render this with Router

// TODO: ММ: onLogin - функция, показывающая является ли человек уже авторизован в браузере??
interface ILoginDialogProps {
  onLogin?: () => void;
}
// TODO: ММ: что такое noop?
export const SignupDialog: React.FC<ILoginDialogProps> = ({ onLogin = noop }) => {
  // TODO: ММ: как работать с useSession ?
  const { session, sessionActions } = useSession();

  // TODO: ММ: за что отвечают поля data.code?
  const isInitialStep = !session.data.code;

  const [fields, setFields] = useState<ILoginDialogFieldsState>(INITIAL_FIELDS_STATE);
  const { name, phone, code } = fields;

  // TODO: ММ: отправка данных в зависимости от типа сессии
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // TODO: ММ: initial step - автологин?
    if (isInitialStep) {
      sessionActions.create(phone, name);
    } else {
      sessionActions.approve(code, onLogin);
    }
  };

  // TODO: ММ: обновление имени? ввод нового имени?
  const handleNameUpdate = (newName: string) => {
    setFields((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  // TODO: ММ: ввод телефона, установка в поле нового номера
  const handlePhoneUpdate = (newPhone: string) => {
    setFields((prev) => ({
      ...prev,
      phone: newPhone,
    }));
  };

  // TODO: ММ: ввод нового кода доступа
  const handleCodeUpdate = (newCode: string) => {
    setFields((prev) => ({
      ...prev,
      code: newCode,
    }));
  };

  return (
    <div className={style.root}>
      {/* TODO: ММ: Преимущества LoginDialogAdvantages - второстепенный компонент (позже можно вынести в отдельный компонент) */}
      <LoginDialogAdvantages className={style.advantages} />
      <form className={style.form} onSubmit={handleSubmit}>
        {/* TODO: ММ: или выводится поле "имя-телефон" или "код-подтверждение" */}
        {
          isInitialStep ? (
            <LoginDialogInitialStep
              name={name}
              phone={phone}
              isActive={session.process.create !== ProcessEnum.REQUESTED}
              onNameChange={handleNameUpdate}
              onPhoneChange={handlePhoneUpdate}
            />
          ) : (
            <LoginDialogFinalStep
              code={code}
              isActive={session.process.approve !== ProcessEnum.REQUESTED}
              onCodeChange={handleCodeUpdate}
            />
          )
        }
      </form>
    </div>
  );
};
