import type { IModalAction } from './actionCreator';

import { SESSION_ACTION_TYPES as SESSION_ACTIONS } from '../session/actionTypes';
import { MODAL_ACTION_TYPES as ACTIONS } from './actionTypes';

export interface IModalState {
  content: React.ReactNode;
  isVisible: boolean;
}

const INITIAL_STATE = {
  content: null,
  isVisible: false,
} as const;

export const modalReducer = (
  prevState: IModalState | undefined,
  action: IModalAction,
): IModalState => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTIONS.HIDE:
    case SESSION_ACTIONS.APPROVE.SUCCESS: {
      return INITIAL_STATE;
    }

    case ACTIONS.SHOW: {
      return {
        content: action.payload,
        isVisible: true,
      };
    }

    default:
      return state;
  }
};
