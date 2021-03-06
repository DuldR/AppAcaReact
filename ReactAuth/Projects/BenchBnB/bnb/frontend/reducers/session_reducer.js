import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions'


const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state);
    let newState = {}


    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, {id: action.payload.id})
            return newState
        case LOGOUT_CURRENT_USER:
            newState = Object.assign({}, state, {id: null})
            return newState
        default:
            return state;
    }
}

export default sessionReducer