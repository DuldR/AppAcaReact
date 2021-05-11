import React from 'react';

class BenchShow extends React.Component {

    constructor(props) {
        super(props)

    }



    render() {


        const { description, lat, seats, long, loaded } = this.props

        console.log(this.props)

        return (
            <ul>
                <li>
                    {this.props.bench.id}
                </li>
            </ul>
        )
    }
}

export default BenchShow