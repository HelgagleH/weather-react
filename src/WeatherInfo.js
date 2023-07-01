import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="Weather1">
            <div className="middle">
                <div className="today-wrapper">

                    <div className="today">
                        <div className="today-left">
                            <div className="today-city">
                                <p>{props.data.city}</p>
                            </div>
                            <div className="today-icon">
                                <div className="d-flex today-icon-wrap">
                                    <WeatherIcon code={props.data.icon} size={52} />
                                </div>
                            </div>
                            <div className="today-weather-description">
                                <p>{props.data.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="today-right">
                        <div className="today-left-wrapper">
                            <div className="today-city"></div>
                            <div className="today-date">
                                <FormattedDate date={props.data.date} />
                            </div>
                            <div className="today-weather col">
                                <span className="today-weather-value"><WeatherTemperature celsius={props.data.temperature} /></span>
                                <span className="units"></span>
                            </div>
                            <div className="weather-values">
                                <ul>
                                    <li className="humidity-value">Humidity: {props.data.humidity}%</li>
                                    <li className="wind-value">Wind: {Math.round(props.data.wind)} km/h</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="empty"></div>


            <div className="container"></div>
        </div >
    );
}
