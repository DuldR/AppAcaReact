import React from 'react'
import { Link } from 'react-router-dom'


class Greeting extends React.Component{

    constructor(props) {
        super(props)


        this.loggedIn = this.loggedIn.bind(this)
        this.signup = this.signup.bind(this)
        this.greeting = this.greeting.bind(this)
        this.logout = this.logout.bind(this)
    }


    loggedIn() {
        return (this.props.currentUser === undefined)
    }

    signup() {
        return (
            <div>
                <Link to="/signup">Signup </Link>
                <Link to="/login">Login</Link>
            </div>
        )

    }

    logout() {
        this.props.logout();
    }

    greeting() {
        const {currentUser} = this.props
        return (
            <div>
                <h1>Welcome, {currentUser.username}</h1>
                <button onClick={this.logout}>Log out?</button>
            </div>
        )
    }


    render() {
        // const {currentUser} = this.props

        return (
            <div>
                {this.loggedIn() ? this.signup() : this.greeting()}
            </div>
        )

        // This is NG
        // return (

        //     {this.greeting()}

        // )

    }
}

export default Greeting