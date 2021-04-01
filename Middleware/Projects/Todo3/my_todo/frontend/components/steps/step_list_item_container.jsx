import { connect } from 'react-redux'
import StepListItem from './step_list_item.jsx'

import { updateStep, deleteStep } from '/frontend/actions/steps_actions'

const mapDispatchToProps = dispatch => ( {

    removeStep: step => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step)),
    updateStep: step => dispatch(updateStep(step)),
    deleteStep: step => dispatch(deleteStep(step))

})

export default connect(null, mapDispatchToProps)(StepListItem);