import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
      </Head>
      <p>Hello world!</p>
    </div>
  );
};

export default IndexPage;
