import type { StateType } from '../rootReducer';
import type { ISessionState } from './reducer';

export const sessionSelector = (state: StateType): ISessionState => state.session;
