import { createStore, applyMiddleware } from 'redux';
import combineReducer from './../reducers/root_reducer.js'
import logger from 'redux-logger';
import thunk from '../middleware/thunk.js'


const configureStore = (preloadedState = {}) => {
  return createStore(
    combineReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
}

export default configureStore;