import React from 'react';

class GiphysIndexItem extends React.Component {


    render() {

        const { giphy } = this.props
        return(
            <li>
                <img src={giphy.images.original.url}></img>
            </li>
        )
    }
}

export default GiphysIndexItem