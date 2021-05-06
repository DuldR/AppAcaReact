import React from 'react';


class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "", lat: 0, long: 0, seats: 0 }
    }


    render() {

        return (
            <form className="bench-form" id="bench-submit">

                <label >Description</label>
                <input className="form-description" type='text'></input>
                <label >Seats</label>
                <input className="form-seats" type='text'></input>

            </form>
        )
    }


}

export default BenchForm