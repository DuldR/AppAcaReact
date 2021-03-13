import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/todo_store.js'
import { receiveTodos, receiveTodo } from './actions/todo_actions.js'

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<div>Hooked</div>, document.getElementById('root'));
});
