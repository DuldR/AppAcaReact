import * as APIUtil from '../util/util_reviews'


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const START_LOADING_ALL_REVIEWS = "START_LOADING_ALL_REVIEWS"


export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}


export const fetchReviews = (bench) => (dispatch) => {
    return APIUtil.getReviews(bench).then(reviews => {
        dispatch(receiveReviews(reviews))
    })
}