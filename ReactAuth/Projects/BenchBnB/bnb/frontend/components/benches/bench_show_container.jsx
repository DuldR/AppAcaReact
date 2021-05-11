import { connect } from 'react-redux'
import BenchShow from './bench_show'
import { toObj } from '/frontend/reducers/selectors'
import * as Bench from '../../actions/bench_actions'


const mapStateToProps = (state, ownProps) => ({

    bench: toObj(state.entities.benches)[ownProps.match.params.benchId],
    loaded: state.ui.loaded.detailLoading


})

const mapDispatchToProps = dispatch => ({

    fetchBench: (bench) => dispatch(Bench.fetchOneBench(bench))

})

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow)