export const toObj = (benches) => {

    if (Object.entries(benches).length === 0) return {}
    let returnObj = {}

    benches.forEach(bench => {
        returnObj[bench.id] = bench
    })

    return returnObj

}

export const selectAllReviews = (state) => {
    return Object.values(state.entities.reviews)
}