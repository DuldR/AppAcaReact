import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = {};


    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            nextState = Object.assign({}, state, action.pokemons)
            return nextState
        default:
            return state;
    }
}

export default pokemonsReducer