import { useSelector } from 'react-redux';
import type { ActionCreatorsMapObject } from 'redux';

import { useActions } from 'ts/hooks';

import { modalActionCreator } from './actionCreator';
import type { IModalActionCreator } from './actionCreator';
import { modalSelector } from './selectors';
import type { IModalState } from './reducer';

interface IUseModalOutput {
  modalState: IModalState;
  modalActions: ActionCreatorsMapObject<IModalActionCreator>;
}

export const useModal = (): IUseModalOutput => {
  const modalState = useSelector(modalSelector);
  const modalActions = useActions<IModalActionCreator>(modalActionCreator);

  return { modalState, modalActions };
};
