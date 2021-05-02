export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};

    }

    createMarkerFromBench(bench) {
        return new google.maps.Marker({
            position: { lat: bench.lat, lng: bench.long },
            map: this.map,
            title: bench.description
        })
    }

    updateMarkers(benches = []) {
        benches.forEach(bench => {
            this.markers[bench.id] = this.createMarkerFromBench(bench)
        })
    }
}