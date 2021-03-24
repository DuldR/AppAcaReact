import { connect } from 'react-redux'
import StepListItem from './step_list_item.jsx'


const mapDispatchToProps = dispatch => ( {

    removeStep: step => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step))

})

export default connect(null, mapDispatchToProps)(StepListItem);