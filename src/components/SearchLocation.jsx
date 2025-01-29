import React, { useState } from 'react';

export default function SearchLocation({onDataFetched}) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isValidNumber = (value) => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
      
    const validateInputs = () => {
        if (!latitude || !longitude) {
            setError("Latitude and longitude can't be empty.");
            return false;
        }

        if (!isValidNumber(latitude) || !isValidNumber(longitude)) {
            setError("Latitude and longitude must be valid numbers.");
            return false;
        }

        if (latitude > 90 || latitude < -90) {
            setError("Latitude range is [90;-90]");
            return false;
        }

        if (longitude > 180 || longitude < -180) {
            setError("Longitude range is [180;-180]");
            return false;
        }

        return true;
    }
  

    const fetchData = () => {
        setError(null);
      
        if (!validateInputs()) {
          return;
        }
      
        setLoading(true);
      
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`;
            
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            onDataFetched(data);
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
      };

    const handleLatitudeChange = (e) => {
        setLatitude(e.target.value.trim());
    };

    const handleLongitudeChange = (e) => {
        setLongitude(e.target.value.trim());
    };

    return (
        <div className='searchDiv'>
            <table>
                <tbody>
                    <tr>
                        <td className='searchLabel'><span>Latitude:</span></td>
                        <td className='searchInput'><input type="text" value={latitude} onChange={handleLatitudeChange} /></td>
                    </tr>
                    <tr>
                        <td className='searchLabel'><span>Longitude:</span></td>
                        <td className='searchInput'><input type="text" value={longitude} onChange={handleLongitudeChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={fetchData} disabled={loading}>
                                {loading ? "Wait..." : "Search"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='errorBox'>{error ? error : '\xa0'}</div>
        </div>
    );
}