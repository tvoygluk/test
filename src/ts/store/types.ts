import type { Action } from 'redux';

export interface IAction<TPayload = any> extends Action {
  payload?: TPayload;
}

export interface ICustomer {
  phone: string;
  name: string;
}
