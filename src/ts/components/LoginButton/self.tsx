import React from 'react';

import { LoginIcon } from 'common/icons';
import { LabelledButton } from 'common/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'common/LabelledButton';
import { useModal } from 'store/modal';

import { IdentificationDialog } from '../IdentificationDialog';

interface ILoginable {
  onLogin?: () => void;
}

type LoginButtonProps = FinallyComposedLabelledButtonPropsType<ILoginable>;

export const LoginButton: React.FC<LoginButtonProps> = ({
  iconClassName,
  onLogin,
  ...propsRest
}) => {
  const { modalActions } = useModal();

  const noDefaultColor = Boolean(iconClassName);

  return (
    <LabelledButton
      {...propsRest}
      label="Войти"
      onClick={() => {
        modalActions.show(<IdentificationDialog
          onLogin={onLogin}
          isLoginDialog
        />);
      }}
    >
      <LoginIcon className={iconClassName} noDefaultColor={noDefaultColor} />
    </LabelledButton>
  );
};
