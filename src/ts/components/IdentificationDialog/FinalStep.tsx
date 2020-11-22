/* eslint-disable import/no-cycle */
import React, { useState } from 'react';

import { Input } from 'common/Input';

import { IdentificationDialogHeader } from './Header';
import { IdentificationDialogRedirectionTip } from './RedirectionTip';
import { IdentificationDialogSubmitButton } from './SubmitButton';
import { IdentificationDialogTimer } from './Timer';
import type { ChangeHandler, IActivatable } from './types';
import type { ISessionActionCreator } from 'store/session/actionCreator';
import { useSession } from 'store/session';

import style from './style.scss';

interface IIdentificationDialogFinalStepProps extends IActivatable {
  code: string;
  onCodeChange: ChangeHandler;
  sendNewCode: ()=> ISessionActionCreator;
}

export const IdentificationDialogFinalStep: React.FC<IIdentificationDialogFinalStepProps> = ({
  code,
  isActive,
  onCodeChange,
  sendNewCode,
}) => {
  const { session } = useSession();
  const [triggerTimer, settriggerTimer] = useState(false);
  const isCodeInvalid: boolean = session.process.approve === 'ERROR' && code !== '' && code !== session.data.code;
  return (
    <>
      <IdentificationDialogHeader
        caption="Введите код подтверждения"
        captionTip="полученный в SMS–сообщении"
      />
      <IdentificationDialogTimer reRunTimer={triggerTimer} />
      <div className={style.inputGroup}>
        <Input
          inputMode="decimal"
          placeholder="Код подтверждения"
          value={code}
          aria-label="Введите код подтверждения"
          onChange={(event) => {
            onCodeChange(event.target.value);
          }}
          isInvalid={isCodeInvalid}
          hint={isCodeInvalid ? 'Проверьте код подтверждения' : null}
          isNumberFormat
          format="######"
        />
      </div>
      <IdentificationDialogRedirectionTip
        action="Отправить новый"
        question="Не получили код?"
        onClick={() => {
          sendNewCode();
          settriggerTimer((prev) => !prev);
        }}
      />
      <IdentificationDialogSubmitButton
        isActive={isActive && code !== ''}
        legend="Подтвердить"
      />
    </>
  );
};
