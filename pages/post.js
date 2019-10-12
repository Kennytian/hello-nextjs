import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  // http://localhost:3000/post?pid=2
  const { pid } = router.query;
  return <p>Post: {pid}</p>;
};

export default Post;
