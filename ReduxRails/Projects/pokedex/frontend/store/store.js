import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import combineReducer from './../reducers/root_reducer.js'
// import thunk from '../middleware/thunk.js'


const configureStore = (preloadedState = {}) => {
  return createStore(
    preloadedState,
    applyMiddleware(thunk)
  );
}

export default configureStore;