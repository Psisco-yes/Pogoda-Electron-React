import React from 'react';
import tempToRGB from './tempToRGB.js';
import WeatherIconBox from './WeatherIconBox.jsx';

export default function DailyWeatherBox({time, weather_code, temp_max, temp_min, wind_speed, wind_direction, units}) {
    const date = new Date(time);

    const formattedDate = date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const tempUnit = units.temperature_2m_max;
    const windSpeedUnit = units.wind_speed_10m_max;
    const windDirectionUnit = units.wind_direction_10m_dominant;

    return (
        <div className='dailyWeatherBox'>
            <div className='dailyWrapper'>
                <div className="dailyTempsBox">
                    <div>
                        <img src='../assets/temp_max.png' alt='Maximum Temperature Icon' />
                        <span style={{color: tempToRGB(temp_max), WebkitTextStrokeColor: tempToRGB(temp_max,true)}}>{temp_max}{tempUnit}</span>
                    </div>
                    <div>
                        <img src='../assets/temp_min.png' alt='Minimum Temperature Icon' />
                        <span style={{color: tempToRGB(temp_min), WebkitTextStrokeColor: tempToRGB(temp_min,true)}}>{temp_min}{tempUnit}</span>
                    </div>
                </div>
                <div className="dailyIconBox">
                    <WeatherIconBox weather_code={weather_code}/>
                </div>
                <div className='dailyWindDirection'>
                    <div className='windDirectionIcon'>
                        <img src='../assets/wind_arrow.png' alt='Wind Direction Arrow' style={{transform: `rotate(${wind_direction}deg)`}} />
                    </div>
                </div>
            </div>
            <div className='dailyMiscBox'>
                <div className='dailyDateBox'>
                    <div>
                        <span>{formattedDate}</span>
                    </div>
                </div>
                <div className='windData dailyWindData'>
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
    )
}