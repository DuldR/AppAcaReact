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