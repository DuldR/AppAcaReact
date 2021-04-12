import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store'


// Testing
import APIUtil from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions'



window.APIUtil = APIUtil
window.receiveAllPokemon = receiveAllPokemon


document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.store = store
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hai getto</h1>, root);

});
