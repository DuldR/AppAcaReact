import { RECEIVE_BENCHES, RECEIVE_ONE_BENCH } from './../actions/bench_actions'

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = {}


    switch (action.type) {

        case RECEIVE_BENCHES:
            return Object.assign({}, state, action.benches)
        case RECEIVE_ONE_BENCH:
            return Object.assign({}, state, action.bench)
        default:
            return state;
    }
}

export default benchesReducer