import React from 'react';
import BenchMap from './bench_map'

class BenchShow extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchBench(this.props.match.params.benchId)
    }



    render() {




        if ( this.props.loaded === false ) { return <h1>Loading</h1> }
        
        const { description, lat, seats, long } = this.props.bench
        return (

            <section>
                <BenchMap  drag={false} />
                <ul>
                    <li>
                        {description}
                    </li>
                </ul>

            </section>
                
        )
    }
}

export default BenchShow