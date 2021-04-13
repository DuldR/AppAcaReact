import React from 'react';


class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon
    }

    constructor(props) {
        super(props)

    }
    render() {

        const { pokemon } = this.props;

        const listPokemon = pokemon.map((poke, idx) => (
            <li key={"poke " + idx}>
                {poke.name}
            </li>
        ))

        return (
            <ul>
                {listPokemon}
            </ul>
        )
    }
}

export default PokemonIndex