export const UPDATE_BOUNDS = "UPDATE_BOUNDS"
import * as bench from '../actions/bench_actions'

export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}

export const fetchBounds = (bounds) => (dispatch, getState) => {

    dispatch(updateBounds(bounds))

    // console.log(getState().ui.boundsFilter)

    dispatch(bench.fetchBenches({bounds: getState().ui.boundsFilter}))
    // return (dispatch, getState) => {
    //     dispatch(updateBounds(bounds));
    //     return bench.fetchBenches(getState().ui.boundsFilters)
    // }
}