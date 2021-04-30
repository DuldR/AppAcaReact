import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import React from 'react'

export const Search = (props) => {

    const {fetchBenches, benches} = props

    return (
        <div>
            
            <BenchIndex fetchBenches={fetchBenches} benches={benches} />
            <BenchMap />
        </div>
    )
}