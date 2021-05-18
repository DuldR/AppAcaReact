import React from 'react';
import BenchMap from './bench_map'
import ReviewIndexContainer from '../reviews/review_index_container'
import ReviewFormContainer from '../reviews/review_form_container'

import { Route, Switch } from 'react-router-dom'

class BenchShow extends React.Component {

    constructor(props) {
        super(props)

    

    }

    componentDidMount() {
        this.props.fetchBench(this.props.match.params.benchId)
        this.props.fetchReviews({review:{lookup_bench_id: this.props.match.params.benchId}})
    }



    render() {



        if ( this.props.loaded === false ) { return <h1>Loading</h1> }
        
        const { description, lat, seats, long } = this.props.bench
        return (

            <section>
                <BenchMap benches={[this.props.bench]} center={{lat: lat, lng: long}} drag={false} />
                <ul>
                    <li>
                        <label>Name: </label>
                        {description}
                    </li>
                    <li>
                        <label>Seats: </label>
                        {seats}
                    </li>
                    <li>
                        <label>Lat: </label>
                        {lat}
                    </li>
                    <li>
                        <label>Long: </label>
                        {long}
                    </li>
                </ul>

                <ReviewIndexContainer />
                <Route path='/benches/:benchId/review' component={ReviewFormContainer} />
        
            </section>
                
        )
    }
}

export default BenchShow