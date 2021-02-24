import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: new Date() }
    }

    componentDidMount() {
        console.log("Did Mount Fired");
        const interval = setInterval(function() {
            this.tick();
        }.bind(this), 1000)
    }

    tick() {
        this.setState({ time: new Date()});
    }

    render() {

        const {time} = this.state
        return (
            <div>
                <h1>Clock</h1>
                <span>{time.getHours()}:</span>
                <span>{time.getMinutes()}:</span>
                <span>{time.getSeconds()}</span>
            </div>
        )
    }
}

export default Clock;