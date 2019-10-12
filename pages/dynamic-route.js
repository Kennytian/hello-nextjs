import React from 'react';
import Link from 'next/link';

const pids = ['id1', 'id2', 'id3'];

const DynamicRoute = () =>
  pids.map(pid => (
    <Link key={pid} href='/post?pid=[pid]' as={`/post/${pid}`}>
      <a>Post {pid}</a>
    </Link>
  ));

export default DynamicRoute;
