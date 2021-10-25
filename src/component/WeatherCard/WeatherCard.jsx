import React from 'react';
import './WeatherCard.css';
import { WiCloudRefresh } from 'react-icons/wi';
import { FiRefreshCw } from 'react-icons/fi';


function WeatherCard({ cityName, weatherDegree, weatherState, icon, onRefresh }) {
    return (
        <div className="c-weather-card">
            <div className="btn-refresh" onClick={onRefresh}><FiRefreshCw /></div>
            <div className="card-title-container">
                <p className="card-title">{cityName}</p>
                <p>{weatherState}</p>
                <p className="card-degrees">{weatherDegree} C</p>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            </div>
        </div>
    );
}

export default WeatherCard;