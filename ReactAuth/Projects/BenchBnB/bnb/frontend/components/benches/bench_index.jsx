import React from 'react'
import { BenchIndexItem } from './bench_index_item'


class BenchIndex extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        if (Object.entries(this.props.benches).length === 0) { return <h1> Loading </h1>}
        if (this.props.benches === undefined) { return <h1> Loading </h1>}

        const listBenches = this.props.benches.map((bench, idx) => {
            return <BenchIndexItem desc={bench.description} lat={bench.lat} long={bench.long} seats={bench.seats} key={"bench-item-" + idx}/>
        })



        return (
            <div>
                {listBenches}
            </div>
        )
    }
}

export default BenchIndex