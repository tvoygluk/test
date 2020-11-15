import React, { useState } from 'react';
import { noop } from 'lodash';

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

interface ILoginDialogProps {
  onLogin?: () => void;
}

export const LoginDialog: React.FC<ILoginDialogProps> = ({ onLogin = noop }) => {
  const { session, sessionActions } = useSession();

  const isInitialStep = !session.data.code;

  const [fields, setFields] = useState<ILoginDialogFieldsState>(INITIAL_FIELDS_STATE);
  const { name, phone, code } = fields;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (isInitialStep) {
      sessionActions.create(phone, name);
    } else {
      sessionActions.approve(code, onLogin);
    }
  };

  const handleNameUpdate = (newName: string) => {
    setFields((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  const handlePhoneUpdate = (newPhone: string) => {
    setFields((prev) => ({
      ...prev,
      phone: newPhone,
    }));
  };

  const handleCodeUpdate = (newCode: string) => {
    setFields((prev) => ({
      ...prev,
      code: newCode,
    }));
  };

  return (
    <div className={style.root}>
      <LoginDialogAdvantages className={style.advantages} />
      <form className={style.form} onSubmit={handleSubmit}>
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
