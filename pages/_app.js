import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import App from 'next/app';
import withReduxStore from '../lib/redux';

class MainApp extends App {
  constructor(props) {
    super(props);
    this.persist = persistStore(props.reduxStore);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <PersistGate loading={<Component {...pageProps} />} persistor={this.persist}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(MainApp);
