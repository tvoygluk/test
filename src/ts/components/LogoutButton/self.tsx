import React from 'react';
import { noop } from 'lodash';

import { LogoutIcon } from 'common/icons';
import { LabelledButton } from 'common/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'common/LabelledButton';
import { useSession } from 'store/session';

interface ILogoutable {
  onLogout?: () => void;
}

type LogoutButtonProps = FinallyComposedLabelledButtonPropsType<ILogoutable>;

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  iconClassName,
  onLogout = noop,
  ...propsRest
}) => {
  const { sessionActions } = useSession();

  const noDefaultColor = Boolean(iconClassName);

  return (
    <LabelledButton
      {...propsRest}
      label="Выйти"
      onClick={() => {
        sessionActions.close();
        onLogout();
      }}
    >
      <LogoutIcon className={iconClassName} noDefaultColor={noDefaultColor} />
    </LabelledButton>
  );
};
