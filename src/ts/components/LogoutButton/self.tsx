import React from 'react';
import noop from 'lodash/noop';

import { LogoutIcon } from 'common/icons';
import { LabelledButton } from 'components/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'components/LabelledButton';
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
