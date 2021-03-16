import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


// const applyMiddleware = (store, ...args) => {
//   let dispatch = store.dispatch;

//   args.forEach((ware) => {
//     dispatch = ware(store)(dispatch);
//   })

//   return Object.assign({}, store, { dispatch });
// }



document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  // store = applyMiddleware(store, logger);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
