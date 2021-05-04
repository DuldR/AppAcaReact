export const createBench = (bench) => {

    return $.ajax({
        method: "POST",
        url: "api/benches",
        data: bench
    })

}

export const getBenches = (filters) => {
    return $.ajax({
        method: "GET",
        url: "api/benches",
        data: filters
    })

}

// Test Params
// let testP ={
//     "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
//     "southWest"=> {"lat"=>"36", "lng"=>"-123"}
// }

// testP = {bounds: {
//     northEast: {lat: 37.80971, lng: -122.39208},
//     southWest: {lat: 36, lng: -123}
// }}