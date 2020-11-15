import React from 'react';

import { IconButton } from 'common/IconButton';
import { LikeIcon, LIKE_ICON_DEFAULT_COLOR } from 'common/icons';

interface ILikeIconButtonProps {
  className?: string;
  pressed?: boolean;
  onClick: () => void;
}

const LIKE_BUTTON_COLOR_SCHEME = {
  filled: {
    fill: LIKE_ICON_DEFAULT_COLOR,
    stroke: LIKE_ICON_DEFAULT_COLOR,
  },
  unfilled: {
    fill: 'none',
    stroke: 'black',
  },
};

export const LikeIconButton: React.FC<ILikeIconButtonProps> = ({
  className,
  pressed,
  onClick,
}) => {
  const paint = pressed ? 'filled' : 'unfilled';

  return (
    <IconButton
      className={className}
      aria-label="Мне нравится"
      pressed={pressed}
      onClick={onClick}
    >
      <LikeIcon colorScheme={LIKE_BUTTON_COLOR_SCHEME} paint={paint} />
    </IconButton>
  );
};
