import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item'

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)

  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    

    const listPokemon = this.props.pokemon.map((poke, idx) => {
      return <PokemonIndexItem pokeName={poke.name} pokeImg={poke.imageUrl} pokeId={poke.id} key={"pokeIndex " + idx}/>
    })


    return (
    <section className="pokedex">
      <ul>
      {/* {this.props.pokemon.map((poke, idx) => (
        <li key={"poke " + idx}className="pokemon-index-item">
          <span>{poke.id}</span>
          <img src={poke.imageUrl}/>
          <span>{poke.name}</span>
        </li>
      ))} */}

    

      {listPokemon}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;