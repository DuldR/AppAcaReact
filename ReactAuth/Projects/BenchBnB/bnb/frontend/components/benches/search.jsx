import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import FilterForm from './filter_form'
import BenchShowContainer from './bench_show_container'
import React from 'react'
import { Route } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {

        super(props)
    }

    // This fixes the no loading
    componentDidMount() {

        let initBounds = {
          "northEast": {"lat": 37.80971, "lng": -122.39208},
          "southWest": {"lat": 36, "lng":-123}
        }
        this.props.fetchFilter("bounds", initBounds);
    }


    render() {

        
        const {fetchFilter, benches, bounds, maxSeating, minSeating, loaded } = this.props

        if (loaded === false) { return <h1>Loading</h1>}

        return (
            <div>
    
                
                <Route exact path='/' render={(props) => (
                    <section>
                        <BenchMap {...props} fetchFilter={fetchFilter} benches={benches} />
                        <FilterForm {...props} fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} />
                        <BenchIndex {...props} bounds={bounds} fetchFilter={fetchFilter} benches={benches}/>

                    </section>
                    
                    )}
                />
                
                <Route exact path='/benches/:benchId' component={BenchShowContainer} />
                
            </div>

        )
    }
}

export default Search