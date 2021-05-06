import { UPDATE_BOUNDS, UPDATE_FILTER } from './../actions/filter_actions'

const filterReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {}

    switch (action.type) { 
        case UPDATE_BOUNDS:
            return action.bounds
        case UPDATE_FILTER:
            return action.filter
        default:
            return state;
    }
}

export default filterReducer