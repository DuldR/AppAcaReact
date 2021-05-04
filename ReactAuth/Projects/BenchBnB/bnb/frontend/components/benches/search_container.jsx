import { connect } from 'react-redux'
import { Search } from './search'
import * as Actions from '../../actions/bench_actions'
import * as Bounds from '../../actions/filter_actions'

const mapStateToProps = state => ({

    benches: state.entities.benches

})

const mapDispatchToProps = dispatch => ({

    fetchBenches: (filter) => dispatch(Actions.fetchBenches(filter)),
    updateBounds: (bounds) => dispatch(Bounds.updateBounds(bounds)),
    fetchBounds: (bounds) => dispatch(Bounds.fetchBounds(bounds))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)