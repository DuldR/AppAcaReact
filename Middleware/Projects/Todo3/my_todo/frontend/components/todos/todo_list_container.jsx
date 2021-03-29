import { connect } from 'react-redux'
import { ToDo } from './todo_list.jsx'
import { allTodos } from '/frontend/reducers/selectors.js'

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);


