import {
  RECEIVE_BENCHES,
  RECEIVE_ONE_BENCH,
  START_LOADING_ALL_BENCHES,
  START_LOADING_ONE_BENCH
} from '../actions/bench_actions';


const initialState = {
  indexLoading: false,
  detailLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_ALL_BENCHES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_ONE_BENCH:
      return Object.assign({}, state, {detailLoading: true});
    default:
      return state;
  }
};

export default loadingReducer;