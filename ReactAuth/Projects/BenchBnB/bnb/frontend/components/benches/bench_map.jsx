import React from 'react'
import MarkerManager from '../../util/marker_manager'


class BenchMap extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map);

        // Sample Marker
        // this.myMarker = new google.maps.Marker({
        //     position: { lat: 37.781035, lng: -122.447908 },
        //     map: this.map,
        //     title: "Anus."

        // })
        //
        // map.addListener("center_changed", () => {
        // // 3 seconds after the center of the map has changed, pan back to the
        // // marker.
        // window.setTimeout(() => {
        //     map.panTo(marker.getPosition());
        // }, 3000);
        // });

        // this.map.addListener("bounds_changed", () => {
        //     console.log("fired")
        // })

        this.map.addListener("idle", () => {
            let boundsObject = {}
            let b = this.map.getBounds()

            boundsObject = { northEast: { lat: b.getNorthEast().lat(), lng: b.getNorthEast().lng() }, 
                southWest: { lat: b.getSouthWest().lat(), lng: b.getSouthWest().lng() }
            }

            this.props.updateBounds(boundsObject)
        })


        this.MarkerManager.updateMarkers();
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }


    render() {
        return (
            <div id='map-container' ref={ map => this.mapNode = map }>
            </div>
        )
    }
}

export default BenchMap