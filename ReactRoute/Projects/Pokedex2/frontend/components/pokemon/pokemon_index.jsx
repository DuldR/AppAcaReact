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
        {listPokemon}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;