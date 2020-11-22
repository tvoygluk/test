import React, { useEffect, useCallback } from 'react';
import classNames from 'classnames';

import { IconButton } from 'common/IconButton';
import { CloseIcon } from 'common/icons';
import { useModal } from 'store/modal';
import { useSession } from 'store/session';
import { KEYBOARD_KEYS } from 'ts/constants';

import style from './style.scss';

interface IProps {
  className?: string;
}

// TODO: add focus locker

export const AppModal: React.FC<IProps> = ({ className }) => {
  const { modalState, modalActions } = useModal();
  const { sessionActions } = useSession();

  const { content, isVisible } = modalState;

  const hideModal = useCallback(() => {
    modalActions.hide();
    sessionActions.close();
  }, [modalActions]);

  useEffect(() => {
    const handleEscKeyDown = (event: KeyboardEvent) => {
      if (isVisible && event.key === KEYBOARD_KEYS.ESCAPE) {
        hideModal();
      }
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [isVisible, hideModal]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      hideModal();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={classNames(style.root, className)} role="dialog" aria-modal="true">
      <div
        className={style.overlay}
        role="none"
        onClick={handleOverlayClick}
      >
        <div className={style.content} role="document">
          {content}
          <IconButton
            className={style.closeButton}
            aria-label="Закрыть модальное окно"
            onClick={hideModal}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
