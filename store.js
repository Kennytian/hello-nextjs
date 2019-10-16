import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.RESET:
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
};

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

export const serverRenderClock = isServer => dispatch => {
  return dispatch({
    type: actionTypes.TICK,
    light: !isServer,
    lastUpdate: Date.now(),
  });
};

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({
      type: actionTypes.TICK,
      light: true,
      lastUpdate: Date.now(),
    });
  }, 1000);
};

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
