import { connect } from 'react-redux'
import StepListItem from './step_list_item.jsx'


const mapStateToProps = (state) => {

}

const mapDispatchToProps = dispatch => ( {

    removeStep: step => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receivStep(step))

})

export default connect(null, mapDispatchToProps)(StepListItem);