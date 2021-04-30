import { connect } from 'react-redux'
import { Search } from './search'
import * as Actions from '../../actions/bench_actions'

const mapStateToProps = state => ({

    benches: state.entities.benches

})

const mapDispatchToProps = dispatch => ({

    fetchBenches: () => dispatch(Actions.fetchBenches())

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)