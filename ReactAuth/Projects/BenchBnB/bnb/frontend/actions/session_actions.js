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

export const login = (user) => (dispatch) => {
    return APIUtil.login({session: user}).then(payload => dispatch(receiveCurrentUser(payload)))
}

export const logout = () => (dispatch) => {
    return APIUtil.logout().then(dispatch(logoutCurrentUser()))
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup({user: user}).then(payload => dispatch(receiveCurrentUser(payload)))
}