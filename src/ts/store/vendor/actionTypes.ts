import { ProcessEnum } from 'ts/constants';

enum VendorActionNames {
  APPEND_MASTER = 'APPEND_MASTER',
  APPEND_SERVICE = 'APPEND_SERVICE',
  APPEND_VENDOR = 'APPEND_VENDOR',
  GET_VENDROS = 'GET_VENDROS',
  GET_VENDOR_BY_ID = 'GET_VENDOR_BY_ID',
  SELECT_SERVICE = 'SELECT_SERVICE',
}

const GET_VENDORS_ACTIONS = {
  [ProcessEnum.REQUESTED]: 'vendor:get-vendors-requested',
  [ProcessEnum.SUCCESS]: 'vendor:get-vendors-success',
  [ProcessEnum.ERROR]: 'vendor:get-vendors-error',
} as const;

const GET_VENDOR_BY_ID_ACTIONS = {
  [ProcessEnum.REQUESTED]: 'vendor:get-vendor-by-id-requested',
  [ProcessEnum.SUCCESS]: 'vendor:get-vendor-by-id-success',
  [ProcessEnum.ERROR]: 'vendor:get-vendor-by-id-error',
} as const;

const SELECT_SERVICE_ACTIONS = {
  CHECK: 'vendor:select-service:check',
  UNCHECK: 'vendor:select-service:uncheck',
} as const;

export const VENDOR_ACTION_TYPES = {
  [VendorActionNames.GET_VENDROS]: GET_VENDORS_ACTIONS,
  [VendorActionNames.GET_VENDOR_BY_ID]: GET_VENDOR_BY_ID_ACTIONS,
  [VendorActionNames.SELECT_SERVICE]: SELECT_SERVICE_ACTIONS,
} as const;
