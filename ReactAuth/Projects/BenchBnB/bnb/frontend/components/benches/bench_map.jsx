import React from 'react'

export const BenchMap = (props) => {

    const mapRef = React.createRef()

    return (
        <div id='map-container' ref={mapRef}>
        </div>
    )
}