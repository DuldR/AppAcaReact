import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: new Date() }
    }

    componentDidMount() {
        console.log("Did Mount Fired");
        this.interval = setInterval(() => {
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        console.log("Unmount fired");
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
                    {/* <span className="time-box">Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>
                    <span className="date-box">Date: {time.toDateString()}</span> */}

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