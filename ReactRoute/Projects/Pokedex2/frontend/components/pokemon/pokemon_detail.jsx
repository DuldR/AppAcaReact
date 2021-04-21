import React from 'react'
import { Route } from 'react-router-dom'
import ItemDetailContainer from '../items/item_detail_container'


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

        const { pokemon, moves, items } = this.props

        // const listMoves = moves.map((move,idx) => {
        //     return <li key={"move " + idx}>{move}</li>
        // })
        
        
        const listMoves = moves.join(", ");
        const listItems = items.map((item, idx) => (

            <li key={"list-" + idx}>
                Name: {item[0]}
                <img src={item[1]}></img>
            </li>
        ))

    

        return (
            <section className="pokemon-detail">
                {console.log(pokemon)}
                
                <figure>
                    <img src={this.isLoaded() ? pokemon.imageUrl : ""}></img>

                </figure>

                <ul>
                    <li><h2>{this.isLoaded() ? pokemon.name : "Loading" }</h2></li>
                    <li>{this.isDetailLoaded() ? "Type: " + pokemon.pokeType : "Type: Loading"}</li>
                    <li>{this.isDetailLoaded() ? "Attack: " + pokemon.attack : "Attack: Loading"}</li>
                    <li>{this.isDetailLoaded() ? "Defense: " + pokemon.defense : "Defense: Loading"}</li>
                 </ul>

                <ul>
                    <li>Moves: {listMoves}</li>
                </ul>

                <ul className="toys">
                    <h2>Items</h2>
                    {/* {listItems} */}

                    <Route path='/pokemon/:pokemonId/items/:itemId' component={ItemDetailContainer} />

                </ul>
            
            </section>
        )
    }
}

export default PokemonDetail