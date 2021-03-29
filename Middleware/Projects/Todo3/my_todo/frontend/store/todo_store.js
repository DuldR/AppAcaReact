import { createStore, applyMiddleware } from 'redux';
import combineReducer from './../reducers/root_reducer.js'
import thunk from '../middleware/thunk.js'


const configureStore = createStore(combineReducer, applyMiddleware(thunk));

export default configureStore;