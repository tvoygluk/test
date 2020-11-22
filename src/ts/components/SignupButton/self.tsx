import React from 'react';

import { SignupIcon } from 'common/icons';
import { LabelledButton } from 'common/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'common/LabelledButton';
import style from 'components/MobileSidebar/Profile/style.scss';
import { useModal } from 'store/modal';

import { IdentificationDialog } from '../IdentificationDialog';

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

  return (
    <LabelledButton
      {...propsRest}
      label="Зарегистрироваться"
      onClick={() => {
        modalActions.show(<IdentificationDialog
          onLogin={onLogin}
          isLoginDialog={false}
        />);
      }}
    >
      <SignupIcon className={style.icon} />
    </LabelledButton>
  );
};
