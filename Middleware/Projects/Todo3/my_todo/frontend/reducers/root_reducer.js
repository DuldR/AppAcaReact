import { combineReducers } from 'redux'
import todosReducer from "./todo_reducers.js"
import stepsReducer from "./step_reducers.js"
import errorsReducer from "./error_reducers.js"

export default combineReducers({
    todos: todosReducer,
    steps: stepsReducer,
    errors: errorsReducer

})