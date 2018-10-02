import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}, history) {
  const middlewares = [
    // loggerMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ];
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  for (const saga of sagas) {
    sagaMiddleware.run(saga);
  }

  return store;
}
