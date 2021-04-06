import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {


    constructor(props) {
        super(props)

        this.state = { searchTerm: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState( { searchTerm: e.currentTarget.value} )
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchGiphys(this.state.searchTerm)

    }


    render() {

        const { giphys } = this.props

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search GIFs</label>
                    <br></br>
                    <input onChange={this.handleChange} type='text'></input>
                    <button>Submit</button>
                </form>

                <GiphysIndex giphys={giphys}/>
            </div>
        )
    }
}

export default GiphysSearch