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

        
        const {fetchBenches, fetchFilter, benches, maxSeating, minSeating, loaded } = this.props

        if (loaded === false) { return <h1>Loading</h1>}

        return (
            <div>
                <section>
                    <BenchMap fetchFilter={fetchFilter} benches={benches} />
                </section>
            
                {/* <FilterForm fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} />  */}
                <Route exact path='/' render={(props) => (
                    <FilterForm {...props} fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} />
                    )}
                />
                <Route exact path='/' render={(props) => (
                    <BenchIndex {...props} benches={benches}/>
                    )}
                />

                <Route exact path='/benches/:benchId' component={BenchShowContainer} />
                
            </div>

        )
    }
}

export default Search