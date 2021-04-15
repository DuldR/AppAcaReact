import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = {};

  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    newState = Object.assign({}, action.pokemon, state);
    return newState
  case RECEIVE_ONE_POKEMON:
    newState = Object.assign({}, action.pokemon)
    return newState
  default:
    return state;
  }
}
  
export default pokemonReducer;
