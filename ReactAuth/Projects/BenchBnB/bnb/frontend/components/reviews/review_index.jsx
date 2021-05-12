import React from 'react'


class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props)
        // console.log(props.reviews)
    }


    render() {

        if (this.props.loaded === false) { return <h1>Loading</h1>}

        const reviews = this.props.reviews.map((review, idx) => {
            return <li key={"review-" + idx}>
                {review.comment}
            </li>
        })


        return (
            <ul>
                {reviews}
            </ul>
        )
    }
}

export default ReviewIndex