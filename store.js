import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  exampleData: [],
  error: null,
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
    case actionTypes.LOAD_EXAMPLE_DATA:
      return {
        ...state,
        exampleData: action.data,
      };
    case actionTypes.LOADING_DATA_FAILURE:
      return {
        ...state,
        error: true,
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
  LOAD_EXAMPLE_DATA: 'LOAD_EXAMPLE_DATA',
  LOADING_DATA_FAILURE: 'LOADING_DATA_FAILURE',
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

export const loadExampleData = data => {
  return { type: actionTypes.LOAD_EXAMPLE_DATA, data };
};

export const loadingExampleDataFailure = () => {
  return { type: actionTypes.LOADING_DATA_FAILURE };
};

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['exampleData'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const initializeStore = (preloadedState = initialState) => {
  return createStore(persistedReducer, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
