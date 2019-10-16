import React from 'react';

import { Provider } from 'react-redux';
import { initializeState } from '../store';
import App from 'next/app';

let reduxStore;
const getOrInitializeStore = initialState => {
  if (typeof window === 'undefined') {
    return initializeState(initialState);
  }

  if (!reduxStore) {
    reduxStore = initializeState(initialState);
  }

  return reduxStore;
};

export const withRedux = (PageComponent, { ssr = true } = {}) => {
  const WithRedux = ({ initialReduxState, ...props }) => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.display = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      const reduxStore = getOrInitializeStore();
      context.reduxStore = reduxStore;

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {};

      return { ...pageProps, initializeState: reduxStore.getState() };
    };
  }

  return WithRedux;
};
