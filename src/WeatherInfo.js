import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Weather from "./Weather";

// export default function WeatherInfo(props) {
//     return (
//         <div className="middle">
//             <h1 className="today-city">{props.data.city}</h1>
//             <ul>
//                 <li>
//                     <FormattedDate date={props.data.date} />
//                 </li>
//                 <li className="text-capitalize">{props.data.description}</li>
//             </ul>
//             <div className="row mt-3">
//                 <div className="col-6">
//                     <div className="d-flex">
//                         <div>
//                             <WeatherIcon code={props.data.icon} size={52} />
//                         </div>

//                         <div>
//                             <WeatherTemperature celsius={props.data.temperature} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-6">
//                     <ul>
//                         <li>Humidity: {props.data.humidity}%</li>
//                         <li>Wind: {props.data.wind} km/h</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }



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
                                    <img
                                        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                                        alt="Weather img"
                                        className="icon-today"
                                    />
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
                                <p>SUN 4.06 / 00:52</p>
                            </div>
                            <div className="today-weather">
                                <span className="today-weather-value"><WeatherTemperature celsius={props.data.temperature} /></span>
                                <span className="units">°C</span>
                            </div>
                            <div className="weather-values">
                                <ul>
                                    <li className="humidity-value">Humidity: {props.data.humidity}%</li>
                                    <li className="wind-value">Wind: {props.data.wind} km/h</li>
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
