import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {routerReducer, routerMiddleware } from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import * as reducers from './reducers';
import history from './history'
import { axiosApiMiddleware } from '../src/actions/axios';

const historyMiddleware = routerMiddleware(history);

const reducer = combineReducers({ ...reducers, routing: routerReducer });

const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: () => true // eslint-disable-line
});

let middlewares = [
  thunkMiddleware, historyMiddleware, axiosApiMiddleware
];

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  middlewares = [...middlewares, logger];
}

const composeEnhancers = composeWithDevTools({
  serialize: true
});

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    isProduction
      ? applyMiddleware(...middlewares)
      : composeEnhancers(applyMiddleware(...middlewares))
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers'); // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }
  
  return store;
}
