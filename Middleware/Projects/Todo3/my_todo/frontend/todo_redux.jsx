import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/todo_store.js'
import Root from './components/root.jsx'
import { allTodos } from './reducers/selectors.js'
import { stepsByTodoId } from './reducers/selectors.js'
import APIUtil from './util/util_funcs.js'



import { receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo } from './actions/todo_actions.js'
import { receiveSteps, receiveStep, removeStep } from './actions/steps_actions.js'

window.store = configureStore();

// Todos
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;


// Steps
window.receiveSteps = receiveSteps;
window.receiveStep = receiveStep;
window.removeStep = removeStep;

// Selectors

// window.allTodos = allTodos;
window.stepsByTodoId= stepsByTodoId;

// Test ajax

// window.fetchTodos = APIUtil.fetchTodos;

window.fetchTodos = fetchTodos
window.createTodo = createTodo

window.APIUtil = APIUtil

// Scratch Actions
// Step
const newStep = { id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }
const newTodo = { id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }



document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
