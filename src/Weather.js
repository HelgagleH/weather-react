import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
    return (
        <div className="Weather">
            <Search />
            <div className="middle">
                <div className="today-wrapper">
                    <div className="today">
                        <div className="today-left">
                            <div className="today-city">
                                <p>Thessaloniki</p>
                            </div>
                            <div className="today-icon">
                                <div className="d-flex today-icon-wrap">
                                    <img
                                        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                                        alt="Weather img"
                                        className="icon-today"
                                    />
                                </div>
                            </div>
                            <div className="today-weather-description">
                                <p>Clear</p>
                            </div>
                        </div>
                    </div>
                    <div className="today-right">
                        <div className="today-left-wrapper">
                            <div className="today-city"></div>
                            <div className="today-date">
                                <p>SUN 4.06 / 00:52</p>
                            </div>
                            <div className="today-weather">
                                <span className="today-weather-value">18</span>
                                <span className="units">°C</span>
                            </div>
                            <div className="weather-values">
                                <ul>
                                    <li className="humidity-value">Humidity: 50 %</li>
                                    <li className="wind-value">Wind: 1 km/h</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty"></div>
            </div>

            <div className="container"></div>
        </div>
    );
}
