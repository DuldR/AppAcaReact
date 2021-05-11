import React from 'react';

class BenchShow extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        // console.log(this.props)
        this.props.fetchBench(this.props.match.params.benchId)
    }



    render() {




        if ( this.props.loaded === false ) { return <h1>Loading</h1> }
        
        const { description, lat, seats, long } = this.props.bench
        return (
            <ul>
                <li>
                    {description}
                </li>
            </ul>
        )
    }
}

export default BenchShow