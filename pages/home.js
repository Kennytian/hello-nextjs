import React from 'react';
import Link from "next/link";

import DefaultLayout from "../components/layout";
import Nav from '../components/nav';
import styles from '../styles.scss';

const Home = () => {
  return (
    <DefaultLayout>
      <Nav />
      Click <div className={styles.example}>Hello Next.js</div>
      <Link href={{ pathname: '/my-image', query: { name: 'Zeit' } }}>
        <a>my-image</a>
      </Link>{' '}
      to view image
      <Link scroll={false} href="/?counter=10"><a>Disables scrolling</a></Link>
      <Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
    </DefaultLayout>
  );
};

export default Home;
