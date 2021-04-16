import React from 'react'


class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestOnePokemon(this.props.match.params.pokemonId)
    }


    render() {
        return (
            <h1 className="pokemon-detail">howdy</h1>
        )
    }
}

export default PokemonDetail