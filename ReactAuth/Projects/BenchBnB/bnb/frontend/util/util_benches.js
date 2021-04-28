export const createBench = (bench) => {

    return $.ajax({
        method: "POST",
        url: "api/benches",
        data: bench
    })

}

export const getBenches = () => {

    return $.ajax({
        method: "GET",
        url: "api/benches"
    })

}