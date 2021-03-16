import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/todo_store.js'
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions.js'

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<div>Hooked</div>, document.getElementById('root'));
});
