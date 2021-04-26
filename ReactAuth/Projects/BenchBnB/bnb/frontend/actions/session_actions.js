import * as APIUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

export const receiveCurrentUser = (payload) => ({
    type: RECEIVE_CURRENT_USER,
    payload
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})