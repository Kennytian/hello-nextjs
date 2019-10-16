import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes as types } from '../store';

const useCounter = () => {
  const count = useSelector(state => state.count);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: types.INCREMENT,
    });
  };

  const decrement = () => {
    dispatch({
      type: types.DECREMENT,
    });
  };

  const reset = () => {
    dispatch({
      type: types.RESET,
    });
  };

  return { count, increment, decrement, reset };
};

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
