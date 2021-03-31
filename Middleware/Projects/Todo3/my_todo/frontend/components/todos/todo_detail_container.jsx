import { connect } from 'react-redux'
import TodoDetailView from './todo_detail_view.jsx'

import { deleteTodo } from '/frontend/actions/todo_actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps)),
    deleteTodo: todo => dispatch(deleteTodo(todo))

})

export default connect(null, mapDispatchToProps)(TodoDetailView);