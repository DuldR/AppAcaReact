import { connect } from 'react-redux'
import { TodoDetailView } from './todo_detail_view.jsx'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo));

})

export default connect(null, mapDispatchToProps)(TodoDetailView);