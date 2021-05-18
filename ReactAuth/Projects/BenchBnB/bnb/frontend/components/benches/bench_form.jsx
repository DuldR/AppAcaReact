import React from 'react';
import { Route, Redirect } from 'react-router-dom'


class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "", lat: this.props.lat, long: this.props.lng, seats: 0, photoFile: null }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.addBench = this.addBench.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let bench = { bench: this.state }
        const formData = new FormData();

        formData.append('bench[description]', this.state.description)
        formData.append('bench[lat]', this.state.lat)
        formData.append('bench[long]', this.state.long)
        formData.append('bench[seats]', this.state.seats)
        if (this.state.photoFile) {
            formData.append('bench[photo]', this.state.photoFile)
        }

        // $.ajax({
        //     method: "POST",
        //     url: "api/benches",
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // })

        console.log(formData)

        this.props.createBench(formData).then(
            this.props.history.push('/')
        )

    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0] })
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
                <br>
                </br>

                <input type="file" onChange={this.handleFile}></input>

                <button>Submit</button>

            </form>
        )
    }


}

export default BenchForm