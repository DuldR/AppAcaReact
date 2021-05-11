import { connect } from 'react-redux'
import BenchShow from './bench_show'


const mapStateToProps = (state, ownProps) => ({

    bench: state.entities.benches[ownProps.match.params.benchId],
    test: {}


})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(BenchShow)