import { useSelector } from 'react-redux';
import type { ActionCreatorsMapObject } from 'redux';

import { useActions } from 'ts/hooks';

import { sessionActionCreator } from './actionCreator';
import type { ISessionActionCreator } from './actionCreator';
import { sessionSelector } from './selectors';
import type { ISessionState } from './reducer';

interface IUseSessionOutput {
  session: ISessionState;
  sessionActions: ActionCreatorsMapObject<ISessionActionCreator>;
}

export const useSession = (): IUseSessionOutput => {
  const session = useSelector(sessionSelector);
  const sessionActions = useActions<ISessionActionCreator>(sessionActionCreator);

  return { session, sessionActions };
};
