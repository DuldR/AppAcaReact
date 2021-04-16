import React from 'react'


class PokemonDetail extends React.Component {


    constructor(props) {
        super(props)

        console.log(this.props)
    }

    componentDidMount() {
        this.props.requestOnePokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
            this.props.requestOnePokemon(this.props.match.params.pokemonId)
        }
    }


    render() {

        const { pokemon } = this.props

        // console.log(pokemon);
        return (
            <section className="pokemon-detail">
                
                <span></span>
                
            </section>
        )
    }
}

export default PokemonDetail