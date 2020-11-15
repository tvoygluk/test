import React from 'react';

import { Input } from 'common/Input';

import { LoginDialogHeader } from './Header';
import { LoginDialogRedirectionTip } from './RedirectionTip';
import { LoginDialogSubmitButton } from './SubmitButton';
import { LoginDialogTimer } from './Timer';
import type { ChangeHandler, IActivatable } from './types';

import style from './style.scss';

interface ILoginDialogFinalStepProps extends IActivatable {
  code: string;
  onCodeChange: ChangeHandler;
}

export const LoginDialogFinalStep: React.FC<ILoginDialogFinalStepProps> = ({
  code,
  isActive,
  onCodeChange,
}) => {
  return (
    <>
      <LoginDialogHeader
        caption="Введите код подтверждения"
        captionTip="полученный в SMS–сообщении"
      />
      <LoginDialogTimer time="2:38" />
      <div className={style.inputGroup}>
        <Input
          className={style.input_last}
          inputMode="decimal"
          placeholder="Код подтверждения"
          value={code}
          aria-label="Введите код подтверждения"
          onChange={(event) => {
            onCodeChange(event.target.value);
          }}
        />
      </div>
      <LoginDialogRedirectionTip
        action="Отправить новый"
        question="Не получили код?"
        onClick={() => {
          console.log('Request new SMS code');
        }}
      />
      <LoginDialogSubmitButton
        isActive={isActive}
        legend="Подтвердить"
      />
    </>
  );
};
