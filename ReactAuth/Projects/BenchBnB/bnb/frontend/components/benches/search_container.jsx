import { connect } from 'react-redux'
import { Search } from './search'
import * as Actions from '../../actions/bench_actions'
import * as Filters from '../../actions/filter_actions'

const mapStateToProps = state => ({

    benches: state.entities.benches

})

const mapDispatchToProps = dispatch => ({

    fetchBenches: (filter) => dispatch(Actions.fetchBenches(filter,)),
    updateBounds: (bounds) => dispatch(Bounds.updateBounds(bounds)),
    fetchBounds: (filter, value) => dispatch(Bounds.fetchBounds(filter, value)),
    fetchFilter: (filter, value) => dispatch(Filters.fetchFilter(filter, value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)