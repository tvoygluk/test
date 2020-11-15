import type { Action } from 'redux';

import { ProcessEnum } from 'ts/constants';

import { VENDOR_ACTION_TYPES as ACTIONS } from './actionTypes';
import type { IVendorState } from './types';

const INITIAL_STATE = {
  data: {
    list: [],
    current: null,
  },
  process: {
    vendors: ProcessEnum.INITIAL,
    vendorById: ProcessEnum.INITIAL,
  },
};

export const vendorReducer = (
  prevState: IVendorState | undefined,
  action: Action,
): IVendorState => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTIONS.GET_VENDROS.REQUESTED: {
      return {
        ...state,
        process: {
          ...state.process,
          vendors: ProcessEnum.REQUESTED,
        },
      };
    }

    case ACTIONS.GET_VENDROS.SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          list: action.payload,
        },
        process: {
          ...state.process,
          vendors: ProcessEnum.SUCCESS,
        },
      };
    }

    case ACTIONS.GET_VENDROS.ERROR: {
      return {
        ...state,
        process: {
          ...state.process,
          vendors: ProcessEnum.ERROR,
        },
      };
    }

    case ACTIONS.GET_VENDOR_BY_ID.REQUESTED: {
      return {
        ...state,
        process: {
          ...state.process,
          vendorById: ProcessEnum.REQUESTED,
        },
      };
    }

    case ACTIONS.GET_VENDOR_BY_ID.SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          current: action.payload,
        },
        process: {
          ...state.process,
          vendorById: ProcessEnum.SUCCESS,
        },
      };
    }

    case ACTIONS.GET_VENDOR_BY_ID.ERROR: {
      return {
        ...state,
        process: {
          ...state.process,
          vendorById: ProcessEnum.ERROR,
        },
      };
    }

    default:
      return state;
  }
};
