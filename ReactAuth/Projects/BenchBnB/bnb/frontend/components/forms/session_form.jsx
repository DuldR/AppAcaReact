import React from 'react'


class SessionForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = { username: "", password: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addData = this.addData.bind(this)
        this.displayHeader = this.displayHeader.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();

        const user = Object.assign({}, this.state);

            this.props.signup( user )
    }

    addData(e) {

        switch(e.currentTarget.classList[0]) {
            case ("form-username"):
                this.setState( { username: e.currentTarget.value } )
                break
            case ("form-password"):
                this.setState( { password: e.currentTarget.value })
                break
            default:
                break
        }

    }

    displayHeader() {

        if (this.props.formType === "login") {
            return <h1>Login Baby</h1>
        } else {
            return <h1>Signup Baby</h1>
        }

    }


    render() {
        return ( 
            <form onSubmit={this.handleSubmit} className="user-form">
                {this.displayHeader()}
                <label>Username:</label>
                <input className="form-username" onChange={this.addData} type='text'></input>
                <label>Password</label>
                <input className="form-password" onChange={this.addData} type='text'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default SessionForm