import React from "react";
import API from "../config/api.js"

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = { temp: "ok", city: "df" }

        this.succ = this.succ.bind(this);
        this.postData = this.postData.bind(this);
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(this.succ);
    }

    postData(response) {
        console.log(response.coord);
    }

    succ(pos) {
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);

        let resp = "";
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API.weather}&units=imperial`
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log(xhr.response);
            console.log(JSON.parse(xhr.response))
        }
        

        xhr.send();

       
    }

    render() {

        const {temp} = this.state

        return (
            <div className="weather">
                <h1 className="header">Weather</h1>
                <div className="weather-box">
                    <h3>{temp}</h3>
                </div>
            </div>
        )
    }
}


export default Weather;