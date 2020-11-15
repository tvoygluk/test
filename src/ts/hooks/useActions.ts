import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { ActionCreatorsMapObject } from 'redux';

export const useActions = <T>(
  actionCreators: T,
): ActionCreatorsMapObject => {
  const dispatch = useDispatch();

  return useMemo<ActionCreatorsMapObject<T>>(
    () => {
      if (Array.isArray(actionCreators)) {
        return actionCreators.map((creator) => bindActionCreators(creator, dispatch));
      }
      return bindActionCreators(actionCreators, dispatch);
    },
    [actionCreators, dispatch],
  );
};
