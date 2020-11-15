import type { Dispatch } from 'redux';

import { VENDOR_ACTION_TYPES as ACTIONS } from './actionTypes';
import { vendorApi } from './api';
import type { IVendor } from './types';

type VendorActionWithOneArg = (dispatch: Dispatch) => Promise<void>;

export interface IVerdorctionCreator {
  getVendors: () => VendorActionWithOneArg;
  getVendorById: (id: string) => VendorActionWithOneArg;
}

export const vendorActionCreator: IVerdorctionCreator = {
  getVendors() {
    return async (dispatch) => {
      dispatch({
        type: ACTIONS.GET_VENDROS.REQUESTED,
      });

      try {
        const data = await vendorApi.getVendors() as IVendor[];

        dispatch({
          type: ACTIONS.GET_VENDROS.SUCCESS,
          payload: data,
        });
      } catch {
        dispatch({
          type: ACTIONS.GET_VENDROS.ERROR,
        });
      }
    };
  },

  getVendorById(id) {
    return async (dispatch) => {
      dispatch({
        type: ACTIONS.GET_VENDOR_BY_ID.REQUESTED,
      });

      try {
        const data = await vendorApi.getVendorById(id);

        dispatch({
          type: ACTIONS.GET_VENDOR_BY_ID.SUCCESS,
          payload: data,
        });
      } catch {
        dispatch({
          type: ACTIONS.GET_VENDOR_BY_ID.ERROR,
        });
      }
    };
  },
};
