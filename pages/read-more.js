import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

const ReadMore = () => {
  return (
    <div>
      Click <span onClick={() => Router.push('/home')}>here</span> to read more.
      <Link href="/home">
        <a>主页</a>
      </Link>
    </div>
  );
};

export default ReadMore;
