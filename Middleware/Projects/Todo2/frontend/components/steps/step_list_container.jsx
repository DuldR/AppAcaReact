import { connect } from 'react-redux'
import { StepList } from './step_list.jsx'
import { stepsByTodoId } from '/frontend/reducers/selectors.js'

const mapStateToProps = (state, ownProps) => ({
    steps: stepsByTodoId(state, ownProps.todo_id),
    todo: ownProps.todo_id

})

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step)),

})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);