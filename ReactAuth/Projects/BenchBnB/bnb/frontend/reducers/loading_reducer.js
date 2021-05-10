import {
  RECEIVE_BENCHES,
  RECEIVE_ONE_BENCH,
  START_LOADING_ALL_BENCHES
} from '../actions/bench_actions';


const initialState = {
  indexLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_BENCHES:
    //   return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_ALL_BENCHES:
      return Object.assign({}, state, { indexLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;