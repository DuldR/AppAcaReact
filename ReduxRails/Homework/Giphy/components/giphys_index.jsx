import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {

    constructor(props) {
        super(props);

        
        
    }

    render() {

        const { giphys } = this.props
        console.log(giphys);
        const giphyItems = giphys.map(giphy => (
            <img src={giphy.images.original.url}></img>
        ))

        return(
            <ul>
                {giphyItems}
            </ul>
        )



    }
}

export default GiphysIndex
