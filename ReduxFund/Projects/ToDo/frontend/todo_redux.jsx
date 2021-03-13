import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/todo_store.js'
import { receiveTodos } from './actions/todo_actions.js'

window.store = configureStore;
window.receiveTodos = receiveTodos;


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<div>Hooked</div>, document.getElementById('root'));
});
