export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

export const UPDATE_FILTER = "UPDATE_FILTER"

import * as bench from '../actions/bench_actions'

export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}

export const updateFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
})

export const fetchBounds = (filter, payload) => (dispatch, getState) => {

    dispatch(updateFilter(filter, payload))

    // return dispatch(bench.fetchBenches({bounds: getState().ui.bounds, max_seating: 5, min_seating: 1}))
    
}

export const fetchFilter = (filter, payload) => (dispatch, getState) => {

    dispatch(updateFilter(filter, payload))

    // return dispatch(bench.fetchBenches({bounds: getState().ui.bounds, max_seating: 5, min_seating: 1}))
    
}