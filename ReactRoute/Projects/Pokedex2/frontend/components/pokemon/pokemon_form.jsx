import React from 'react';

const POKE_TYPES = [
    'fire',
    'electric',
    'normal',
    'ghost',
    'psychic',
    'water',
    'bug',
    'dragon',
    'grass',
    'fighting',
    'ice',
    'flying',
    'poison',
    'ground',
    'rock',
    'steel'
]
class PokemonForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: "", poke_type: "", attack: 0, defense: 0, image_url: "", move_names: []}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.addMove = this.addMove.bind(this)
        this.addPoke = this.addPoke.bind(this)
        this.listPokeTypes = this.listPokeTypes.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();

        let poke = {pokemon: this.state}

        this.props.createPokemon(poke)

        let form = document.getElementById('poke-submit');
        form.reset()
    }

    addMove(e) {
        e.preventDefault();
        let moveInput1 = document.getElementsByClassName('form-move1');
        let moveInput2 = document.getElementsByClassName('form-move2');

        this.setState( {move_names: this.state.move_names.concat(moveInput1[0].value).concat(moveInput2[0].value)})

    }


    addPoke(e) {

        switch(e.currentTarget.classList[0]) {
            case ("form-name"):
                this.setState( {name: e.currentTarget.value} )
                break
            case ('form-type'):
                this.setState( {poke_type: e.currentTarget.value} )
                break
            case ('form-attack'):
                this.setState( {attack: parseInt(e.currentTarget.value)} )
                break
            case ('form-defense'):
                this.setState( {defense: parseInt(e.currentTarget.value)} )
                break
            case ('form-image'):
                this.setState( {image_url: e.currentTarget.value} )
                break
            default:
                break
        }

    }

    listPokeTypes() {
        let pokeTypes = POKE_TYPES.map((poke, idx) => {
            return <option key={"type-" + idx}>{poke}</option>
        })

        return pokeTypes
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="pokemon-form" id="poke-submit">
                <label >Name</label>
                <input className="form-name" onChange={this.addPoke} type='text'></input>
                <br></br>
                <label >PokeType</label>
                <select className="form-type" onChange={this.addPoke}>
                    {this.listPokeTypes()}
                </select>
                <label>Attack</label>
                <br></br>
                <input className="form-attack" onChange={this.addPoke} type='text'></input>
                <br></br>
                <label>Defense</label>
                <br></br>
                <input className="form-defense" onChange={this.addPoke} type='text'></input>
                <br></br>
                <label>Image URL</label>
                <input className="form-image" onChange={this.addPoke} type='text'></input>
                <br></br>
                <label>Move1</label>
                <input className="form-move1" type='text'></input>
                <label>Move2</label>
                <input className="form-move2" type='text'></input>
                <button onClick={this.addMove} type="button">Add Move</button>
                <br></br>
                <button>Submit</button>
            </form>
        )
    }
}

export default PokemonForm