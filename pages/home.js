import React from 'react';
import Nav from '../components/nav';
import styles from '../styles.scss';
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Nav />
      Click <div className={styles.example}>Hello Next.js</div>
      <Link href={{ pathname: '/my-image', query: { name: 'Zeit' } }}>
        <a>my-image</a>
      </Link>{' '}
      to view image

      <Link scroll={false} href="/?counter=10"><a>Disables scrolling</a></Link>
      <Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
    </div>
  );
};

export default Home;
