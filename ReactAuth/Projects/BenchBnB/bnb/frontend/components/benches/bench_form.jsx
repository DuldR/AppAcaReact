import React from 'react';
import { Route, Redirect } from 'react-router-dom'


class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "", lat: this.props.lat, long: this.props.lng, seats: 0 }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.addBench = this.addBench.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let bench = { bench: this.state }

        this.props.createBench(bench).then(
            this.props.history.push('/')
        )

    }

    addBench(e) {

        switch(e.currentTarget.classList[0]) {
            case ("form-description"):
                this.setState( {description: e.currentTarget.value} )
                break
            case ('form-seats'):
                this.setState( {seats: e.currentTarget.value} )
                break
            default:
                break
        }

    }


    render() {

        return (
            <form onSubmit={this.handleSubmit} className="bench-form" id="bench-submit">

                <label >Description: </label>
                <input className="form-description" type='text' onChange={this.addBench}></input>
                <br></br>
                <label >Seats: </label>
                <input className="form-seats" type='text' onChange={this.addBench}></input>
                <br></br>
                <label >Lat: </label>
                <input className="form-lat" type='text' value={this.state.lat} disabled></input>
                <br></br>
                <label >Long: </label>
                <input className="form-lng" type='text' value={this.state.long} disabled></input>

                <button>Submit</button>

            </form>
        )
    }


}

export default BenchForm