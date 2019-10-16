import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

// routeChangeStart
// routeChangeComplete
// routeChangeError
// beforeHistoryChange
// hashChangeStart
// hashChangeComplete
const DefaultLayout = props => {
  const routeChangeStartHandler = url => {
    if (url === '/cow-say-hi') {
      location.href = './no-permission';
    }
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStartHandler);
    return () => {
      Router.events.off('routeChangeStart', routeChangeStartHandler);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>公共头部</title>
      </Head>
      <div style={{ display: 'flex', 'flexDirection': 'column' }}>
        <Link href='/'><a>主页</a></Link>
        <Link href={'/cow-say-hi'}>
          <a>cow-say-hi</a>
        </Link>
        <Link href={'/data-page'}>
          <a>data-page</a>
        </Link>
        <Link href={'/dynamic-route'}>
          <a>dynamic-route</a>
        </Link>
      </div>
      {props.children}
      <footer>版权随便，欢迎分享</footer>
    </div>
  );
};

export default DefaultLayout;
