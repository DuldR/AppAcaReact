import { combineReducers } from 'redux'

import filterReducer from './filter_reducer'


const uiReducer = combineReducers({
    boundsFilter: filterReducer
})

export default uiReducer