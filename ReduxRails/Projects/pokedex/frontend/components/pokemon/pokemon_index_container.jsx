import { connect } from 'react-redux'
import PokemonIndex from './pokemon_index'
import { requestAllPokemon } from '/frontend/actions/pokemon_actions'
import { selectAllPokemon } from '/frontend/reducers/selectors'


const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = dispatch => ({

    requestAllPokemon: dispatch(requestAllPokemon())

})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)