import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import FilterForm from './filter_form'
import React from 'react'

// export const Search = (props) => {

//     const {fetchBenches, fetchFilter, benches, maxSeating, minSeating } = props

//     return (
//         <div>
//             <FilterForm fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} /> 
//             <br></br>
//             <BenchIndex fetchBenches={fetchBenches} benches={benches} />
//             <BenchMap fetchFilter={fetchFilter} benches={benches} />
//         </div>
//     )
// }

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
                <FilterForm fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} /> 
                <br></br>
                <BenchIndex fetchBenches={fetchBenches} benches={benches} />
                <BenchMap fetchFilter={fetchFilter} benches={benches} />
            </div>

        )
    }
}

export default Search