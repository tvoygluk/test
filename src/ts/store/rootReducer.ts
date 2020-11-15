import { combineReducers } from 'redux';

import { modalReducer } from './modal';
import { sessionReducer } from './session';
import { vendorReducer } from './vendor';

export const rootReducer = combineReducers({
  modal: modalReducer,
  session: sessionReducer,
  vendor: vendorReducer,
});

export type StateType = ReturnType<typeof rootReducer>;
