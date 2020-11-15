import type { StateType } from '../rootReducer';
import type { IVendorState } from './types';

export const vendorSelector = (state: StateType): IVendorState => state.vendor;
