import React from "react";
import API from "../config/api.js"

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = { temp: "Loading...", feels: "Loading...", city: "Loading...", weather: "Loading..." }

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

            resp = JSON.parse(xhr.response);
            console.log(resp)

            this.setState( {temp: resp.main.temp, city: resp.name, feels: resp.main.feels_like, weather: resp.weather[0].main} )
        }.bind(this);
        

        xhr.send();

       
    }

    render() {

        const {temp, city, feels, weather} = this.state

        return (
            <div className="weather">
                <h1 className="header">Weather</h1>
                <div className="weather-box">

                    <ul>
                        <li>City:</li>
                        <li>Temp:</li>
                        <li>Feels Like:</li>
                        <li>Weather:</li>
                    </ul>

                    <ul>
                        <li>{city}</li>
                        <li>{temp}</li>
                        <li>{feels}</li>
                        <li>{weather}</li>

                    </ul>
                    
                </div>
            </div>
        )
    }
}


export default Weather;