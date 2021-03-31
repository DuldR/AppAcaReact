import { connect } from 'react-redux'
import TodoList from './todo_list.jsx'
import { allTodos, allErrors } from '/frontend/reducers/selectors.js'

import { fetchTodos, createTodo, updateTodo } from '/frontend/actions/todo_actions'


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos()),
  removeTodo: todo => dispatch(removeTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


