import React from 'react'


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { rating: 0, comment: "" }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.addReview = this.addReview.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("Fired")
    }

    handleCancel(e) {
        e.preventDefault();

    
        this.props.history.push(`/benches/${this.props.bench.id}`)
    }

    addReview(e) {
        e.preventDefault();
        switch(e.currentTarget.classList[0]) {
            case ("form-rating"):
                this.setState( {rating: parseInt(e.currentTarget.value) } )
                break
            case ('form-comment'):
                this.setState( {comment: e.currentTarget.value} )
                break
            default:
                break
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="review-form" id="review-submit">

                <label >Rating: </label>
                <select onChange={this.addReview} className="form-rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br></br>
                <label >Comment: </label>
                {/* <input className="form-comment" type='text' onChange={this.addBench}></input> */}
                <textarea className="form-comment" onChange={this.addReview}></textarea>
                <br></br>

                <button>Submit</button>
                <button onClick={this.handleCancel}>Cancel?</button>

            </form>
        )
    }
}

export default ReviewForm