import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: new Date() }
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);

    }

    tick() {
        this.setState({ time: new Date()});
    }

    render() {

        const {time} = this.state
        return (
            <div className="clock">
                <h1 className="header">Clock</h1>

                <div className="clock-box">
                    <ul>
                        <li>Time:</li>
                        <li>Date:</li>
                    </ul>
                    <ul className="time-box">
                        <li>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()} CST</li>
                        <li>{time.toDateString()}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Clock;