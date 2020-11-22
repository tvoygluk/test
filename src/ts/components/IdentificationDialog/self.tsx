/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import noop from 'lodash/noop';

import { ProcessEnum } from 'ts/constants';
import { useSession } from 'store/session';

import { IdentificationDialogAdvantages } from './Advantages';
import { IdentificationDialogFinalStep } from './FinalStep';
import { IdentificationDialogInitialStep } from './InitialStep';

import style from './style.scss';

interface IContext {
  setCodeApprovedStatus: (value: boolean)=>void;
}

const contextDefaultValue: IContext = {
  setCodeApprovedStatus: () => false,
};

export const Context = React.createContext<IContext>(contextDefaultValue);

interface IIdentificationDialogFieldsState {
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

interface IIdentificationDialogProps {
  onLogin?: () => void;
  isLoginDialog: boolean;
}

export const IdentificationDialog: React.FC<IIdentificationDialogProps> = ({
  onLogin = noop,
  isLoginDialog,
}) => {
  const [codeApprovedStatus, setCodeApprovedStatus] = useState<boolean>(false);

  const { session, sessionActions } = useSession();
  const isInitialStep = !session.data.code;

  const [fields, setFields] = useState<IIdentificationDialogFieldsState>(INITIAL_FIELDS_STATE);
  const { name, phone, code } = fields;

  useEffect(() => {
    setFields((prev) => ({
      ...prev,
      name: '',
      phone: '',
    }));
  }, [isLoginDialog]);

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
    const myPhone = newPhone.replace(/\D+/g, '');
    setFields((prev) => ({
      ...prev,
      phone: myPhone,
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
      <IdentificationDialogAdvantages
        className={style.advantages}
        isLoginDialog={isLoginDialog}
        isDisableButton={!isInitialStep}
      />
      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        {
          isInitialStep ? (
            <IdentificationDialogInitialStep
              name={name}
              phone={phone}
              isActive={
                session.process.create !== ProcessEnum.REQUESTED && Boolean(name) && Boolean(phone)
              }
              onNameChange={handleNameUpdate}
              onPhoneChange={handlePhoneUpdate}
              isLoginDialog={isLoginDialog}
            />
          ) : (
            <Context.Provider value={{
              setCodeApprovedStatus,
            }}
            >
              <IdentificationDialogFinalStep
                code={code}
                isActive={session.process.approve !== ProcessEnum.REQUESTED && codeApprovedStatus}
                onCodeChange={handleCodeUpdate}
                sendNewCode={() => sessionActions.create(phone, name)}
              />
            </Context.Provider>
          )
        }
      </form>
    </div>
  );
};
