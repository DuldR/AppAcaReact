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
        const lookupBench = {}

        benches.forEach(bench => {
            lookupBench[bench.id] = bench
        })

        for (const [key, value] of Object.entries(lookupBench)) {
            if (this.markers[key] === undefined) {
                this.markers[key] = this.createMarkerFromBench(lookupBench[key])
            }
        }

        for (const [key, value] of Object.entries(this.markers)) {
            if (lookupBench[key] === undefined) {
                this.markers[key].setMap(null);
                delete this.markers[key]
            }
        }
    }
}