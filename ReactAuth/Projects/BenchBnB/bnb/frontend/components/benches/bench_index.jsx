import React from 'react'
import { Route } from 'react-router-dom'
import { BenchIndexItem } from './bench_index_item'
import BenchShowContainer from './bench_show_container'


class BenchIndex extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        if (Object.entries(this.props.benches).length === 0) { return <h1> Loading </h1>}
        if (this.props.benches === undefined) { return <h1> Loading </h1>}

        const listBenches = this.props.benches.map((bench, idx) => {
            return <BenchIndexItem benchId={bench.id} desc={bench.description} lat={bench.lat} long={bench.long} seats={bench.seats} key={"bench-item-" + idx}/>
        })



        return (
            <section>
                <Route path='/benches/:benchId' component={BenchShowContainer} />
                <ul>
                    {listBenches}
                </ul>
            </section>
        )
    }
}

export default BenchIndex