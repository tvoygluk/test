import type { Action } from 'redux';

import { MODAL_ACTION_TYPES as ACTIONS } from './actionTypes';

export interface IModalAction extends Action {
  payload?: React.ReactNode;
}

export interface IModalActionCreator {
  hide: () => IModalAction;
  show: (content: React.ReactNode) => IModalAction;
}

export const modalActionCreator: IModalActionCreator = {
  hide() {
    return { type: ACTIONS.HIDE };
  },

  show(content) {
    return {
      type: ACTIONS.SHOW,
      payload: content,
    };
  },
};
