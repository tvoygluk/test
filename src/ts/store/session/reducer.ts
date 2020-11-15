import type { Action } from 'redux';

import { ProcessEnum } from 'ts/constants';
import { ISessionData } from 'ts/types';

import { SESSION_ACTION_TYPES as ACTIONS } from './actionTypes';

interface ISessionProcess {
  approve: ProcessEnum;
  check: ProcessEnum;
  close: ProcessEnum;
  create: ProcessEnum;
}

export interface ISessionState {
  data: ISessionData;
  process: ISessionProcess;
}

const INITIAL_STATE = {
  data: {
    customerName: '',
    approved: false,
    code: null,
    phone: '',
    timeoutSeconds: 0,
    token: '',
  },
  process: {
    approve: ProcessEnum.INITIAL,
    check: ProcessEnum.INITIAL,
    close: ProcessEnum.INITIAL,
    create: ProcessEnum.INITIAL,
  },
} as const;

export const sessionReducer = (
  prevState: ISessionState | undefined,
  action: Action,
): ISessionState => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTIONS.APPROVE.REQUESTED: {
      return {
        ...state,
        process: {
          ...state.process,
          approve: ProcessEnum.REQUESTED,
        },
      };
    }

    case ACTIONS.APPROVE.SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          approved: true,
        },
        process: {
          ...state.process,
          approve: ProcessEnum.SUCCESS,
        },
      };
    }

    case ACTIONS.APPROVE.ERROR: {
      return {
        ...state,
        process: {
          ...state.process,
          approve: ProcessEnum.ERROR,
        },
      };
    }

    case ACTIONS.CHECK.REQUESTED: {
      return {
        ...state,
        process: {
          ...state.process,
          check: ProcessEnum.REQUESTED,
        },
      };
    }

    case ACTIONS.CHECK.SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
          approved: true,
        },
        process: {
          ...state.process,
          check: ProcessEnum.SUCCESS,
        },
      };
    }

    case ACTIONS.CHECK.ERROR: {
      return {
        ...state,
        process: {
          ...state.process,
          check: ProcessEnum.ERROR,
        },
      };
    }

    case ACTIONS.CLOSE.REQUESTED: {
      return {
        ...state,
        process: {
          ...state.process,
          close: ProcessEnum.REQUESTED,
        },
      };
    }

    case ACTIONS.CLOSE.SUCCESS: {
      return {
        ...state,
        data: INITIAL_STATE.data,
        process: {
          ...state.process,
          close: ProcessEnum.SUCCESS,
        },
      };
    }

    case ACTIONS.CLOSE.ERROR: {
      return {
        ...state,
        process: {
          ...state.process,
          close: ProcessEnum.ERROR,
        },
      };
    }

    case ACTIONS.CREATE.REQUESTED: {
      return {
        ...state,
        process: {
          ...state.process,
          create: ProcessEnum.REQUESTED,
        },
      };
    }

    case ACTIONS.CREATE.SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
        process: {
          ...state.process,
          create: ProcessEnum.SUCCESS,
        },
      };
    }

    case ACTIONS.CREATE.ERROR: {
      return {
        ...state,
        process: {
          ...state.process,
          create: ProcessEnum.ERROR,
        },
      };
    }

    default:
      return state;
  }
};
