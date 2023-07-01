import React from "react";

export default function FormattedDate(props) {
    let days = [
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
    ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let date = props.date.getDate();
    if (date < 10) {
        date = `0${date}`;
    }



    let months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
    ];

    let month = months[props.date.getMonth()];

    props.date.getMonth();
    return (
        <div>
            {day} {date}.{month} / {hours}:{minutes}
        </div>
    );
}