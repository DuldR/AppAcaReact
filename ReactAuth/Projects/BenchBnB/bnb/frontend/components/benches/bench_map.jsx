import React from 'react'
import { withRouter } from 'react-router-dom'
import MarkerManager from '../../util/marker_manager'


class BenchMap extends React.Component {

    constructor(props) {
        super(props)

        this.handleIdle = this.handleIdle.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13,
            draggable: this.props.drag
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map);


        if (this.props.location.pathname === "/") {
            this.handleIdle(this.map);
            this.handleClick(this.map);
        } else {

        }

        this.MarkerManager.updateMarkers();

    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    handleIdle(map) {

        map.addListener("idle", () => {
            let boundsObject = {}
            let b = map.getBounds()

            boundsObject = { northEast: { lat: b.getNorthEast().lat(), lng: b.getNorthEast().lng() }, 
                southWest: { lat: b.getSouthWest().lat(), lng: b.getSouthWest().lng() }
            }

            this.props.fetchFilter("bounds", boundsObject)

        })

    }

    handleClick(map) {

        map.addListener('click', (e) => {

            this.props.history.push({
                pathname: "benches/new",
                search: `lat=${e.latLng.lat()}&lng=${e.latLng.lng()}`
            })

    
        })

    }


    render() {
        return (
            <div id='map-container' ref={ map => this.mapNode = map }>
            </div>
        )
    }
}

export default withRouter(BenchMap)