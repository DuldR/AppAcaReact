import React from 'react';

class PokemonForm extends React.Component {

    constructor(props) {
        super(props);
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