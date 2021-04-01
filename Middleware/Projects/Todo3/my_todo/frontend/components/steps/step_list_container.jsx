import { connect } from 'react-redux'
import StepList from './step_list.jsx'
import { stepsByTodoId } from '/frontend/reducers/selectors.js'

import { fetchSteps, createStep, updateStep } from '/frontend/actions/steps_actions'

const mapStateToProps = (state, ownProps) => ({
    steps: stepsByTodoId(state, ownProps.todo_id),
    todo: ownProps.todo_id

})

const mapDispatchToProps = dispatch => ({
    requestSteps: () => dispatch(fetchSteps()),
    fetchSteps: step => dispatch(receiveStep(step)),
    createStep: step => dispatch(createStep(step)),
    updateStep: step => dispatch(updateStep(step)),

})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);