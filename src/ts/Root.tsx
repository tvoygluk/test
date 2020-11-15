import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ErrorBoundary } from 'common/ErrorBoundary';
import { App } from 'components/App';
import { rootReducer } from 'ts/store';

const appliedMiddleware = applyMiddleware(thunk);

const storeEnhancer = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(appliedMiddleware)
  : appliedMiddleware;

const store = createStore(rootReducer, storeEnhancer);

const Root: React.FC = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);

export const HotRoot = hot(Root);
