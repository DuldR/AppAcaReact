import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store'


// Testing
// import APIUtil from './util/api_util'
// import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
// import { selectAllPokemon } from './reducers/selectors'




document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // window.store = store
  // window.dispatch = store.dispatch


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});



// window.APIUtil = APIUtil
// window.receiveAllPokemon = receiveAllPokemon
// window.requestAllPokemon = requestAllPokemon
// window.selectAllPokemon = selectAllPokemon

