export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"

import APIUtil from '../util/api_util'

export const receiveAllPokemon = (pokemons) => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemons
    }
}

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)