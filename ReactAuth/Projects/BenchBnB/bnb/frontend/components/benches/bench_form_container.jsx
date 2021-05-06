import { connect } from 'react-redux'
import BenchForm from './bench_form'
import { createBench } from '../../actions/bench_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({

    createBench: bench => dispatch(createBench(bench))

})

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm)