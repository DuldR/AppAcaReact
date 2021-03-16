import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/todo_store.js'
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions.js'
import { receiveSteps, receiveStep, removeStep } from './actions/steps_actions.js'

window.store = configureStore;

// Todos
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;


// Steps
window.receiveSteps = receiveSteps;
window.receiveStep = receiveStep;
window.removeStep = removeStep;

// Scratch Actions
// Step
const newStep = { id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }
const newTodo = { id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }



document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<div>Hooked</div>, document.getElementById('root'));
});
