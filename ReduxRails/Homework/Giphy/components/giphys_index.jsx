import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {


    render() {

        const { giphys } = this.props
        const giphyItems = giphys.map((giphy,idx) => (

            <GiphysIndexItem key={idx} giphy={giphy} />
        ))

        return(
            <ul>
                {giphyItems}
            </ul>
        )



    }
}

export default GiphysIndex
