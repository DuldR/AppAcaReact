import { combineReducers } from 'redux'


import pokemonsReducer from './pokemon_reducer'

const entitiesReducer = combineReducers({
  pokemon: pokemonsReducer,
})

export default entitiesReducer