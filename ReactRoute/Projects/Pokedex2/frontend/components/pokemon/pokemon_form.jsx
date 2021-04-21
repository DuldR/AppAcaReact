import React from 'react';

class PokemonForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: "", poke_type: "", attack: "", defense: "", image_url: "", move_names: []}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.addMove = this.addMove.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();

        let poke = {pokemon: this.state}

        this.props.createPokemon(poke)

        form.reset()
    }

    addMove(e) {

    }


    render() {
        return (
            <form className="pokemon-form" id="todo-submit">
                <label>Name</label>
                <br></br>
                <label>Attack</label>
                <br></br>
                {/* <input onChange={this.addTodo} type='text'></input> */}
                <br></br>
                <label>Defense</label>
                <br></br>
                {/* <input onChange={this.addTodoBody} type='text'></input> */}
                <br></br>
                <label>Tag</label>
                <ul>
                    {/* {this.listTags()} */}
                </ul>
                <input className="tag-input" type='text'></input>
                <br></br>
                <button type="button">Add Tag</button>
                <button>Submit</button>
            </form>
        )
    }
}

export default PokemonForm