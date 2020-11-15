import React from 'react';

import { LoginIcon } from 'common/icons';
import { LabelledButton } from 'components/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'components/LabelledButton';
import { LoginDialog } from 'components/LoginDialog';
import { useModal } from 'store/modal';

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
        modalActions.show(<LoginDialog onLogin={onLogin} />);
      }}
    >
      <LoginIcon className={iconClassName} noDefaultColor={noDefaultColor} />
    </LabelledButton>
  );
};
