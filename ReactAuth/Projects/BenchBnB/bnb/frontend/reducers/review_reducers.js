import { RECEIVE_REVIEWS } from './../actions/review_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = {}


    switch (action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews)
        default:
            return state;
    }
}

export default reviewsReducer