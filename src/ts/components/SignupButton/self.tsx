import React from 'react';

import { SignupIcon } from 'common/icons';
import { LabelledButton } from 'components/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'components/LabelledButton';
// import { LoginDialog } from 'components/LoginDialog';
import { useModal } from 'store/modal';
import style from 'components/MobileSidebar/Profile/style.scss';
import { SignupDialog } from '../SignupDialog';

interface ILoginable {
  onLogin?: () => void;
}

type LoginButtonProps = FinallyComposedLabelledButtonPropsType<ILoginable>;

export const SignupButton: React.FC<LoginButtonProps> = ({
  iconClassName,
  onLogin,
  ...propsRest
}) => {
  const { modalActions } = useModal();

  // const noDefaultColor = Boolean(iconClassName);

  return (
    <LabelledButton
      {...propsRest}
      label="Зарегистрироваться"
      onClick={() => {
        modalActions.show(<SignupDialog />);
        // TODO: ММ: определиться, какие должны быть пропсы
        // onLogin={onLogin}
      }}
    >
      <SignupIcon className={style.icon} />
    </LabelledButton>
  );
};
