import React from 'react'
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = { username: "", password: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addData = this.addData.bind(this)
        this.displayHeader = this.displayHeader.bind(this)
        this.listErrors = this.listErrors.bind(this)

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

    listErrors() {


        let errors = this.props.errors.map((err, idx) => {
            return <li key={"err-" + idx}>{err}</li>
        })


        return errors
    }

    displayHeader() {

        if (this.props.formType === "login") {
            return <div>
                Log in Baby 
                <Link to='/signup'>Signup</Link>
            </div>
        } else {
            return <div>
                Signup Baby 
                <Link to='/login'>Login</Link>
            </div>
        }

    }


    render() {
        return ( 
            <form onSubmit={this.handleSubmit} className="user-form">
                {this.displayHeader()}
                <ul>
                    {this.listErrors()}
                </ul>
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