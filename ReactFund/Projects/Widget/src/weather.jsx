import React from "react";
import API from "../config/api.js"

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

        let url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API.weather}`
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.send();

        xhr.onload = function() {
            console.log(xhr.response);
        }
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