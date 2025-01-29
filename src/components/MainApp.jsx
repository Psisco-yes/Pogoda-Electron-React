import React, { useState } from 'react';
import WeatherInfoBox from './WeatherInfoBox.jsx';
import SearchLocation from './SearchLocation.jsx';
import "./main.css";
export default function MainApp() {

    const [apiData, setApiData] = useState(null);

    const handleDataFetch = (data) => {
        setApiData(data);
    };

    return (
        <div className='main'>
            <SearchLocation onDataFetched={handleDataFetch}/>
            <WeatherInfoBox data={apiData}/>
            <div className='credits'>Icons by <b>Icons8.com</b></div>
        </div>
    )
}