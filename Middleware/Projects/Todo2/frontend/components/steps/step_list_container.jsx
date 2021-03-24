import { connect } from 'react-redux'
import { StepList } from './step_list.jsx'
import { stepsByTodoId } from '/frontend/reducers/selectors.js'

const mapStateToProps = state => ({
    steps: state.steps

})

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step)),

})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);