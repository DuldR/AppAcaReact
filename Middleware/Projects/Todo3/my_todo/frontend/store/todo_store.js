import { createStore } from 'redux';
import combineReducer from './../reducers/root_reducer.js'


const configureStore = createStore(combineReducer);

export default configureStore;