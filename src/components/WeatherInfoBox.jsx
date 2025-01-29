import React from 'react';
import CurrentWeatherBox from './CurrentWeatherBox.jsx';
import DailyWeatherBox from './DailyWeatherBox.jsx';

export default function WeatherInfoBox({data}) {
    if (!data || !data.daily || !data.daily.time) {
        return <div className='weatherBoxNoData'>No data to display.</div>;
    }
    
    return (
        <div className='weatherBox'>
            <div className='currentBox'>
                <CurrentWeatherBox
                    time={data.current.time}
                    weather_code={data.current.weather_code}
                    temp={data.current.temperature_2m}
                    humidity={data.current.relative_humidity_2m}
                    wind_speed={data.current.wind_speed_10m}
                    wind_direction={data.current.wind_direction_10m}
                    units={data.current_units}
                />
            </div>
            <div className='dailyBox'>
                {data.daily.time.map((time, index) => (
                    <DailyWeatherBox
                        key={time}
                        time={time}
                        weather_code={data.daily.weather_code[index]}
                        temp_max={data.daily.temperature_2m_max[index]}
                        temp_min={data.daily.temperature_2m_min[index]}
                        wind_speed={data.daily.wind_speed_10m_max[index]}
                        wind_direction={data.daily.wind_direction_10m_dominant[index]}
                        units={data.daily_units}
                    />
                ))}
            </div>
        </div>
    );
}