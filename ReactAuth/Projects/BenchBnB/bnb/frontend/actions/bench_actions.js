import * as APIUtil from '../util/util_benches'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"
export const RECEIVE_ONE_BENCH = "RECEIVE_ONE_BENCH"
export const START_LOADING_ALL_BENCHES = "START_LOADING_ALL_BENCHES"


export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const receiveOneBench = (bench) => {
    return {
        type: RECEIVE_ONE_BENCH,
        bench
    }
}

export const startLoadingAllBenches = () => ({
    type: START_LOADING_ALL_BENCHES
});

export const fetchBenches = (filters) => (dispatch) => {
    return APIUtil.getBenches(filters).then(benches => dispatch(receiveBenches(benches)))
}

export const createBench = (bench) => dispatch => (
    APIUtil.createBench(bench).then(
        bench => {
            dispatch(receiveOneBench(bench));
            return bench
        }
    )
)

