import * as APIUtil from '../util/util_benches'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"


export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const fetchBenches = (filters) => (dispatch) => {
    return APIUtil.getBenches(filters).then(benches => dispatch(receiveBenches(benches)))
}

