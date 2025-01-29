import React from 'react';

export default function WeatherIconBox({weather_code}) {

    let weatherIcon = null;
    
    switch(parseInt(weather_code)){
        case 0:
            weatherIcon = "../assets/sun.png";
            break;
        case 1:
            weatherIcon = "../assets/partly_cloudy.png";
            break;
        case 2:
            weatherIcon = "../assets/cloudy.png";
            break;
        case 3:
            weatherIcon = "../assets/overcast.png";
            break;
        case 45:
            weatherIcon = "../assets/fog.png";
            break;
        case 48:
            weatherIcon = "../assets/rime_fog.png";
            break;
        case 51:
        case 53:
        case 55:
            weatherIcon = "../assets/drizzle.png";
            break;
        case 56:
        case 57:
            weatherIcon = "../assets/freezing_drizzle.png";
            break;
        case 61:
        case 63:
        case 65:
            weatherIcon = "../assets/rain.png";
            break;
        case 66:
        case 67:
            weatherIcon = "../assets/freezing_rain.png";
            break;
        case 71:
        case 73:
        case 75:
        case 77:
            weatherIcon = "../assets/snowfall.png";
            break;
        case 80:
        case 81:
        case 82:
            weatherIcon = "../assets/rain_shower.png";
            break;
        case 85:
        case 86:
            weatherIcon = "../assets/snow_shower.png";
            break;
        case 95:
        case 96:
        case 99:
            weatherIcon = "../assets/thunderstorm.png";
            break;
        default:
            weatherIcon = "../assets/no_info.png";
    }

    return (
        <img className="weatherIcon" src={weatherIcon} alt={`Weather icon for code ${weather_code}`} />
    )
}