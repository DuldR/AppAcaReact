import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";

export const receiveAllPokemon = (payload) => ({
  type: RECEIVE_ALL_POKEMON,
  payload
})

export const receiveOnePokemon = (payload) => ({
  type: RECEIVE_ONE_POKEMON,
  payload
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestOnePokemon = (poke) => (dispatch) => (
  APIUtil.fetchOnePokemon(poke)
    .then(payload => dispatch(receiveOnePokemon(payload.pokemon)))
)

export const createPokemon = (poke) => dispatch => (
  APIUtil.fetchOnePokemon(poke).then(pokemon => dispatch(receiveOnePokemon(pokemon)))
)