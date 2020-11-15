import { useSelector } from 'react-redux';
import type { ActionCreatorsMapObject } from 'redux';

import { useActions } from 'ts/hooks';

import { vendorActionCreator } from './actionCreator';
import type { IVerdorctionCreator } from './actionCreator';
import { vendorSelector } from './selectors';
import type { IVendorState } from './types';

interface IUseVendorOutput {
  vendor: IVendorState;
  vendorActions: ActionCreatorsMapObject<IVerdorctionCreator>;
}

export const useVendor = (): IUseVendorOutput => {
  const vendor = useSelector(vendorSelector);
  const vendorActions = useActions<IVerdorctionCreator>(vendorActionCreator);

  return { vendor, vendorActions };
};
