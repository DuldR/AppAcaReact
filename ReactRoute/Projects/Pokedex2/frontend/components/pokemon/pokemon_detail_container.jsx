import {connect} from 'react-redux'
import PokemonDetail from './pokemon_detail'
import { requestOnePokemon } from '../../actions/pokemon_actions'
import { selectOnePokemon } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon
    // [ownProps.match.params.pokemonId]

})

const mapDispatchToProps = dispatch => ({

    requestOnePokemon: (pokeId) => dispatch(requestOnePokemon(pokeId))

})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)