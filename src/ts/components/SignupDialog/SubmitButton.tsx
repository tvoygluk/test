import React from 'react';

import { Button } from 'common/Button';

interface ILoginDialogSubmitButtonProps {
  className?: string;
  legend: string;
  isActive: boolean;
}

export const LoginDialogSubmitButton: React.FC<ILoginDialogSubmitButtonProps> = ({
  className,
  legend,
  isActive,
}) => {
  return (
    <Button
      className={className}
      type="submit"
      disabled={!isActive}
      isBlack
    >
      {legend}
    </Button>
  );
};
