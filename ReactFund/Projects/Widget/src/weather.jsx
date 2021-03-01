import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: new Date() }

        this.succ = this.succ.bind(this);
    }

    componentDidMount() {
        console.log("Weather Mount Fired");

        navigator.geolocation.getCurrentPosition(this.succ);

    }

    succ(pos) {
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
    }

    render() {

        return (
            <div className="weather">
                <h1 className="header">Weather</h1>
                <div className="weather-box">

                </div>
            </div>
        )
    }
}


export default Weather;