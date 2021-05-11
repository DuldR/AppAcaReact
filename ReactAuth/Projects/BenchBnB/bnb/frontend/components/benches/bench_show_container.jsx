import { connect } from 'react-redux'
import BenchShow from './bench_show'
import { toObj } from '/frontend/reducers/selectors'


const mapStateToProps = (state, ownProps) => ({

    bench: toObj(state.entities.benches)[ownProps.match.params.benchId]


})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(BenchShow)