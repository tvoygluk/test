import type { Dispatch } from 'redux';

import { VENDOR_ACTION_TYPES as ACTIONS } from './actionTypes';
import { vendorApi } from './api';
import type { IVendor } from './types';

import vendorByIdMock from 'ts/mocks/vendor/vendorById';
import vendorsMock from 'ts/mocks/vendor/vendors';

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

        // STUB: mocked resolve
        // const data = await new Promise((resolve) => {
        //   globalThis.setTimeout(() => {
        //     resolve(vendorsMock.data);
        //   }, 1000);
        // });

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
        // const data = await vendorApi.getVendorById(id);

        // STUB: mocked resolve
        const data = await new Promise((resolve) => {
          globalThis.setTimeout(() => {
            resolve(vendorByIdMock.data);
          }, 1000);
        });

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
