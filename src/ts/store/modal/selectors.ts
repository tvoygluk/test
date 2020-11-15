import type { StateType } from '../rootReducer';
import type { IModalState } from './reducer';

export const modalSelector = (state: StateType): IModalState => state.modal;
