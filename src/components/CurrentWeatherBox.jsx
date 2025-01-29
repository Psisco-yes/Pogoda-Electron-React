import React from 'react';
import tempToRGB from './tempToRGB.js';
import WeatherIconBox from './WeatherIconBox.jsx';

export default function CurrentWeatherBox({time, weather_code, temp, humidity, wind_speed, wind_direction, units}) {

    const date = new Date(time);

    const formattedDate = date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('pl-PL', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const tempUnit = units.temperature_2m;
    const humidityUnit = units.relative_humidity_2m;
    const windSpeedUnit = units.wind_speed_10m;
    const windDirectionUnit = units.wind_direction_10m;

    return (
        <div className='boundingWrapper'>
            <div className='boundingBoxes'>
                <div className='tempBox'>
                    <img src='../assets/temperature.png' alt='Humidity Icon' />
                    <span style={{color: tempToRGB(temp), WebkitTextStrokeColor: tempToRGB(temp,true)}}>{temp}{tempUnit}</span>
                </div>
                <div className='humidityBox'>
                    <img src='../assets/humidity.png' alt='Humidity Icon' />
                    <span style={{color: `hsl(200,100%,${100-humidity/2}%)`, WebkitTextStrokeColor: `hsl(200,100%,${(100-humidity/2)-20}%)`}}>{humidity}{humidityUnit}</span>
                </div>
            </div>
            <div className='boundingBoxes'>
                <div className='dateBox'>
                    <span>As of: {formattedTime}, {formattedDate}</span>
                </div>
                <div className="lilFixer">
                    <div className='iconsBoxes'>
                        <div className='iconBox'>
                            <WeatherIconBox weather_code={weather_code} />
                        </div>
                        <div className='windInfoBox'>
                            <div className='windDirectionIcon'>
                                <img src='../assets/wind_arrow.png' alt='Wind Direction Arrow' style={{transform: `rotate(${wind_direction}deg)`}} />
                            </div>
                            <div className='windData'>
                                <div>
                                    <img src='../assets/wind_speed.png' alt='Humidity Icon' />
                                    <span>{wind_speed}{windSpeedUnit}</span>
                                </div>
                                <div>
                                    <img src='../assets/wind_direction.png' alt='Humidity Icon' />
                                    <span>{wind_direction}{windDirectionUnit}</span>  
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}