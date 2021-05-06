import { connect } from 'react-redux'
import BenchForm from './bench_form'
import { fetchBenches } from '../..actions/bench_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session
})