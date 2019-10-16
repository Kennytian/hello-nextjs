import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { withRedux } from '../utils/redux';
import useInterval from '../utils/use-interval';
import Counter from "../components/counter";

const ReadMore = props => {
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    });
  }, 1000);

  const { initializeState } = props;
  const { count, lastUpdate } = initializeState;

  return (
    <div>
      Click <span onClick={() => Router.push('/home')}>here</span> to read more.
      <Link href='/home'>
        <a>主页</a>
      </Link>
      <Counter />
      <div>count: {count}</div>
      <div>lastUpdate: {lastUpdate}</div>
    </div>
  );
};

ReadMore.getInitialProps = ({ reduxStore }) => {
  // Tick the time once, so we'll have a valid time before first render
  const { dispatch } = reduxStore;
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now()
  });

  return {}
};

export default withRedux(ReadMore);
