export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

import * as StepsAPIUtil from '../util/util_steps.js'
import { receiveErrors } from '../actions/error_actions'



export const receiveSteps = (steps) => {

    return {
        type: RECEIVE_STEPS,
        steps
    }
}

export const receiveStep = (step) => {

    return {
        type: RECEIVE_STEP,
        step
    }
}

export const removeStep = (step) => {
    return {
        type: REMOVE_STEP,
        step
    }
}

export const fetchSteps = () => dispatch => (
    StepsAPIUtil.fetchSteps().then(steps => dispatch(receiveSteps(steps)))
)

export const createStep = (step) => dispatch => (
    StepsAPIUtil.createStep(step).then(
        step => dispatch(receiveStep(step)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const updateStep = (step) => dispatch => (
    StepsAPIUtil.updateStep(step).then(
        step => dispatch(receiveStep(step))
    )
)

export const deleteStep = (step) => dispatch => (
    StepsAPIUtil.deleteStep(step).then(
        step => dispatch(removeStep(step))
    )
)