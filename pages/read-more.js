import React from 'react';
import Router from 'next/router';

const ReadMore = () => {
  return (
    <div>
      Click <span onClick={() => Router.push('/home')}>here</span> to read more.
    </div>
  )
};

export default ReadMore;
