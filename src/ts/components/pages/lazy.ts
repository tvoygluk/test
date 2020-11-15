import { lazy } from 'react';

export const LazyHomePage = lazy(() => import(/* webpackChunkName: 'page_home', webpackPrefetch: true */ './HomePage'));

export const LazyStoryBookPage = lazy(() => import(/* webpackChunkName: 'page_storybook', webpackPrefetch: true */ './StoryBookPage'));

export const LazyVendorPage = lazy(() => import(/* webpackChunkName: 'page_vendor', webpackPrefetch: true */ './VendorPage'));
