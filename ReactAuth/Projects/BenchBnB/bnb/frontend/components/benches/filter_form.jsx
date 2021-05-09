import React from 'react';


class FilterForm extends React.Component {
    constructor(props) {
        super(props)


        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        e.preventDefault()
        this.props.fetchFilter("maxSeating", parseInt(e.currentTarget.value))
    }


    render() {
        return  (

            <form>

                <label >Max Seating</label>
                <input onChange={this.handleChange} type='text' ></input>
                <br></br>
                <label >Min Seating </label>
                <input  type='text'></input>
                <br></br>

            </form>
        )
    }
}

export default FilterForm