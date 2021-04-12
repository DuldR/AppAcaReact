import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store'

import APIUtil from './util/api_util'



window.APIUtil = APIUtil


document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // window.store = store
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hai getto</h1>, root);

});
