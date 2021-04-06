import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
    giphys: state.giphys
})

const mapDispatchToProps = dispatch => ({
    fetchGiphys: (search) => dispatch(fetchGiphys(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);

