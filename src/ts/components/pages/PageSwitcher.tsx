import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { LazyHomePage, LazyStoryBookPage, LazyVendorPage } from './lazy';
import { ErrorPage } from './ErrorPage';
import { LoadingPage } from './LoadingPage';

export const PageSwitcher: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <LazyHomePage />
        </Route>
        <Route path={ROUTES.STORYBOOK} exact>
          <LazyStoryBookPage />
        </Route>
        <Route path={ROUTES.VENDOR_ITEM}>
          <LazyVendorPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Suspense>
  );
};
