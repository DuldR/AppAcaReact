import React from 'react'


class PokemonDetail extends React.Component {


    constructor(props) {
        super(props)

        this.isLoaded = this.isLoaded.bind(this)
    }

    componentDidMount() {
        this.props.requestOnePokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
            this.props.requestOnePokemon(this.props.match.params.pokemonId)
        }
    }

    isLoaded() {
        return (this.props.pokemon === undefined)
    }


    render() {

        const { pokemon } = this.props

        // console.log(this.props)
        console.log(pokemon);
        return (
            <section className="pokemon-detail">
                
                <span>{this.isLoaded() ? "Pick a poke" : pokemon.name}</span>
                
            </section>
        )
    }
}

export default PokemonDetail