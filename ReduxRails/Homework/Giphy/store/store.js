import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
    return createStore(
        combineReducer,
        preloadedState,
        applyMiddleware(thunk)
    );
}

export default configureStore