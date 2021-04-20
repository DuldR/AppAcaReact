import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchOnePokemon, createPokemon } from './util/api_util'

import { receiveAllPokemon, receiveOnePokemon, requestOnePokemon, requestAllPokemon } from './actions/pokemon_actions'
import { selectPokemonMovesNames, selectPokemonItems } from './reducers/selectors'

// actions

// window.receiveOnePokemon = receiveOnePokemon
// window.requestOnePokemon = requestOnePokemon
// window.requestAllPokemon = requestAllPokemon

// window.selectPokemonMovesNames = selectPokemonMovesNames
// window.selectPokemonItems = selectPokemonItems

// window.fetchOnePokemon = fetchOnePokemon

window.createPokemon = createPokemon

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");

  const store = configureStore();

  window.store = store
  ReactDOM.render(<Root store={store} />, rootEl)
})