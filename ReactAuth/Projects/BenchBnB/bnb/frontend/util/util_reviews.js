export const createReview = (review) => {

    return $.ajax({


    })

}

export const getReviews = (bench) => {

    return $.ajax({

        method: "GET",
        url: "/api/reviews",
        data: bench
        
    })

}