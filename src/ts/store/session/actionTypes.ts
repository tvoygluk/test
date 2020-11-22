import { ProcessEnum } from 'ts/constants';

enum SessionActionNames {
  APPROVE = 'APPROVE',
  CHECK = 'CHECK',
  CLOSE = 'CLOSE',
  CREATE = 'CREATE',
}

const APPROVE_ACTIONS = {
  [ProcessEnum.INITIAL]: 'session:approve-initialized',
  [ProcessEnum.REQUESTED]: 'session:approve-requested',
  [ProcessEnum.SUCCESS]: 'session:approve-success',
  [ProcessEnum.ERROR]: 'session:approve-error',
} as const;

const CHECK_ACTIONS = {
  [ProcessEnum.REQUESTED]: 'session:check-requested',
  [ProcessEnum.SUCCESS]: 'session:check-success',
  [ProcessEnum.ERROR]: 'session:check-error',
} as const;

const CLOSE_ACTIONS = {
  [ProcessEnum.REQUESTED]: 'session:close-requested',
  [ProcessEnum.SUCCESS]: 'session:close-success',
  [ProcessEnum.ERROR]: 'session:close-error',
} as const;

const CREATE_ACTIONS = {
  [ProcessEnum.REQUESTED]: 'session:create-requested',
  [ProcessEnum.SUCCESS]: 'session:create-success',
  [ProcessEnum.ERROR]: 'session:create-error',
} as const;

export const SESSION_ACTION_TYPES = {
  [SessionActionNames.APPROVE]: APPROVE_ACTIONS,
  [SessionActionNames.CHECK]: CHECK_ACTIONS,
  [SessionActionNames.CLOSE]: CLOSE_ACTIONS,
  [SessionActionNames.CREATE]: CREATE_ACTIONS,
} as const;
