import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import FilterForm from './filter_form'
import React from 'react'

export const Search = (props) => {

    const {fetchBenches, fetchFilter, benches, maxSeating, minSeating } = props

    return (
        <div>
            <FilterForm fetchFilter={fetchFilter} maxSeating={maxSeating} minSeating={minSeating} /> 
            <br></br>
            <BenchIndex fetchBenches={fetchBenches} benches={benches} />
            <BenchMap fetchFilter={fetchFilter} benches={benches} />
        </div>
    )
}