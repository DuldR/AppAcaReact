export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"

import * as APIUtil from '../util/util_funcs.js'
import { receiveErrors } from '../actions/error_actions'

export const receiveTodos = (todos) => {

    return {
        type: RECEIVE_TODOS,
        todos,
    };

}

export const receiveTodo = (todo) => {

    return {
        type: RECEIVE_TODO,
        todo,
    };
}

export const removeTodo = (todo) => {

    return {
        type: REMOVE_TODO,
        todo
    }
}

export const fetchTodos = () => dispatch => (
    APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
)

export const createTodo = (todo) => dispatch => (
    APIUtil.createTodo(todo).then(
        todo => dispatch(receiveTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const updateTodo = (todo) => dispatch => (
    APIUtil.updateTodo(todo).then(
        todo => dispatch(receiveTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const deleteTodo = (todo) => dispatch => (
    APIUtil.updateTodo(todo).then(
        todo => dispatch(deleteTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
)