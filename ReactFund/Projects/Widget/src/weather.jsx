import React from "react";
import API from "../config/api.js"

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: "", long: "" }

        this.succ = this.succ.bind(this);
        this.getLoc = this.getLoc.bind(this);
    
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.getLoc);
    }

    getLoc(pos) {
        this.setState( {lat: pos.coords.latitude, long: pos.coords.longitude} )
    }

    succ(pos) {
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);

        let html = "";
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API.weather}&units=imperial`
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.send();

        xhr.onload = function() {
            html = xhr.response;
        }

        return <div>html</div>
    }

    render() {

        return (
            <div className="weather">
                <h1 className="header">Weather</h1>
                <div className="weather-box">
                    here
                    {this.componentDidMount()}
                </div>
            </div>
        )
    }
}


export default Weather;