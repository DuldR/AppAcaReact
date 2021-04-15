// import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';


// const pokemonReducer = (state = {}, action) => {
//   Object.freeze(state);
//   // const newState = Object.assign({}, state);
//   let newState = {}

//   switch (action.type){
//   case RECEIVE_ALL_POKEMON:
//     newState = Object.assign({}, state, action.pokemon);
//     // return Object.assign({}, action.pokemon, state)
//     return newState
//   case RECEIVE_ONE_POKEMON:
//     // newState = Object.assign({}, action.pokemon)
//     // newState[action.pokemon.id] = action.pokemon
//     // console.log(newState)
//     newState = Object.assign({}, state, {[action.pokemon.id]: action.pokemon});
//     return newState
//   default:
//     return state;
//   }
// }
  
// export default pokemonReducer;

// You're technically added a new object into the state. Its why the receive All component is adding the udnefined after mew
// import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';

// const pokemonReducer = (state = {}, action) => {
//   Object.freeze(state);
//   const nextState = Object.assign({}, state);
//   switch (action.type){
//   case RECEIVE_ALL_POKEMON:
//     return Object.assign({}, action.pokemon, state);
//   case RECEIVE_ONE_POKEMON:
//     nextState[action.pokemon.id] = action.pokemon;
//     return nextState;
//   default:
//     return state;
//   }
// }

// export default pokemonReducer;
