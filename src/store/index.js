import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import gameSaga from "../sagas/gameSaga";
import targetSaga from "../sagas/targetSage";

import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development'
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(reducers, enhancer);

// FIXME: load sagas based on router context
[gameSaga, targetSaga].map(saga => sagaMiddleware.run(saga));

export default store;
