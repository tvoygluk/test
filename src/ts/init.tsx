import React from 'react';
import ReactDOM from 'react-dom';

import { HotRoot } from './Root';

export const init = (): void => {
  const $rootNode = document.getElementById('app-root');
  ReactDOM.render(<HotRoot />, $rootNode);
};
