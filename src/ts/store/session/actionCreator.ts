import type { Dispatch } from 'redux';

import type { ISessionData } from 'ts/types';

import type { StateType } from '../rootReducer';
import { SESSION_ACTION_TYPES as ACTIONS } from './actionTypes';
import { sessionApi } from './api';
import type {
  ISesssionCheckSuccesResponseData,
  ISesssionCreateSuccesResponseData,
} from './api';

// TODO: move to global types
type SessionActionWithOneArg = (dispatch: Dispatch) => Promise<void>;
type SessionActionWithTwoArgs = (dispatch: Dispatch, getState: () => StateType) => Promise<void>;

export interface ISessionActionCreator {
  approve: (code: string, onLogin?: () => void) => SessionActionWithTwoArgs;
  check: () => SessionActionWithOneArg;
  close: () => SessionActionWithOneArg;
  create: (phone: string, customerName: string) => SessionActionWithOneArg;
}

export const sessionActionCreator: ISessionActionCreator = {
  approve(code, onLogin) {
    return async (dispatch, getState) => {
      const { phone, token } = getState().session.data;

      const payload = {
        phone,
        token,
        code,
      };

      try {
        const data = await sessionApi.approve(payload);

        if (Array.isArray(data?.messages)) {
          console.warn(data.messages[0]);

          dispatch({
            type: ACTIONS.APPROVE.ERROR,
            payload: data.messages,
          });
        } else {
          const dataForStorage = JSON.stringify({ phone, token });
          window.localStorage.setItem('session', dataForStorage);

          dispatch({
            type: ACTIONS.APPROVE.SUCCESS,
          });

          if (typeof onLogin === 'function') {
            onLogin();
          }
        }
      } catch {
        dispatch({
          type: ACTIONS.APPROVE.ERROR,
        });
      }
    };
  },

  check() {
    return async (dispatch) => {
      dispatch({
        type: ACTIONS.CHECK.REQUESTED,
      });

      const sessionEntry: string = window.localStorage.getItem('session') ?? '{}';

      const session = JSON.parse(sessionEntry) as Partial<ISessionData>;

      const requestPayload = {
        phone: session.phone,
        token: session.token,
      };

      try {
        const data = await sessionApi.check(requestPayload) as ISesssionCheckSuccesResponseData;

        if (data.customerName) {
          dispatch({
            type: ACTIONS.CHECK.SUCCESS,
            payload: {
              customerName: data.customerName,
            },
          });
        } else {
          dispatch({
            type: ACTIONS.CHECK.ERROR,
          });
        }
      } catch (error) {
        dispatch({
          type: ACTIONS.CHECK.ERROR,
        });
      }
    };
  },

  close() {
    return async (dispatch) => {
      dispatch({
        type: ACTIONS.CLOSE.REQUESTED,
      });

      const sessionEntry: string = window.localStorage.getItem('session') ?? '{}';

      const session = JSON.parse(sessionEntry) as Partial<ISessionData>;

      const payload = {
        phone: session.phone,
        token: session.token,
      };

      try {
        await sessionApi.close(payload);

        window.localStorage.removeItem('session');

        dispatch({
          type: ACTIONS.CLOSE.SUCCESS,
        });
      } catch {
        dispatch({
          type: ACTIONS.CLOSE.ERROR,
        });
      }
    };
  },

  create(phone, customerName) {
    return async (dispatch) => {
      dispatch({
        type: ACTIONS.APPROVE.INITIAL,
      });

      dispatch({
        type: ACTIONS.CREATE.REQUESTED,
      });

      const payload = {
        phone,
        customerName,
      };

      try {
        const data = await sessionApi.create(payload) as ISesssionCreateSuccesResponseData;

        globalThis.alert(`SMS code: ${data.code as string}`);

        dispatch({
          type: ACTIONS.CREATE.SUCCESS,
          payload: data,
        });
      } catch {
        dispatch({
          type: ACTIONS.CREATE.ERROR,
        });
      }
    };
  },
};
