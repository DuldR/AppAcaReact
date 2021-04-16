import React from 'react'


class PokemonDetail extends React.Component {


    constructor(props) {
        super(props)

        this.isLoaded = this.isLoaded.bind(this)
        this.isDetailLoaded = this.isDetailLoaded.bind(this)
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
        return (this.props.pokemon !== undefined)
    }

    isDetailLoaded() {
        if (this.isLoaded() === true) {

            return (this.props.pokemon.attack !== undefined)

        }



    }


    render() {

        const { pokemon } = this.props

        // console.log(this.props)
        return (
            <section className="pokemon-detail">
                
                <figure>
                    <img src={this.isLoaded() ? pokemon.imageUrl : "loading"}></img>
                    <ul>
                        <li>{this.isLoaded() ? pokemon.name : "Loading" }</li>
                        <li>{this.isDetailLoaded() ? "Attack: " + pokemon.attack : "Attack: Loading"}</li>
                        <li>{this.isDetailLoaded() ? "Defense: " + pokemon.defense : "Defense: Loading"}</li>
                        
                    </ul>

                </figure>
                
            </section>
        )
    }
}

export default PokemonDetail