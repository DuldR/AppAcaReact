import { connect } from 'react-redux'
import TodoList from './todo_list.jsx'
import { allTodos, allErrors } from '/frontend/reducers/selectors.js'

import { fetchTodos, createTodo } from '/frontend/actions/todo_actions'


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: allErrors(state)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos()),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


