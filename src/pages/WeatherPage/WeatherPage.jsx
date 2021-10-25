import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WeatherCard from '../../component/WeatherCard/WeatherCard';
import server from '../../shared/server';
import './WeatherPage.css'
function WeatherPage(props) {
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [status, setStatus] = useState(null);
    const [reponse , setResponse] = useState({});
    
    
   
    // async function getTemp() {
    //     try {
    //       const response = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${32}&lon=${34}&appid=${apiKey}`);
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

   
    // useEffect(() => {
    //     console.log("in the useEffect");

    //     //const axios = require('axios');
    //      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`).then(res => {
    //         if (res.data.error) {
    //             alert("Something going wrong")
    //         } else {

    //            let temp = res.data.main.temp;
    //             setWeather(temp);

    //         }
    //     })

    // }, [lng, lat]);

   /** ======= with useEffect =======*/
    useEffect(() => {
        const data = [lng, lat];
        // const data = ["tel aviv"];
        server(data).then(res => {
            if (res.data.error) {
                alert("Something going wrong");
            } else {
                // let temp = res.data.main.pressure;
               // let temp = res.data.main.temp;
               // setWeather(temp);
               setResponse(res.data);
              
            }
        })
       
        
    }, [lng, lat]);

    // const currentWeather = () => {
    //     const data = [lng, lat];
    //     server("lod").then(res => {
    //         if (res.data.error) {
    //             alert("Something going wrong");
    //         } else {
    //             let temp = res.data.name;
    //             console.log(res.data.name);
    //             setWeather(temp);
    //         }
    //     })
    // }
    // const locationWeather = () => {
    //     getLocation();
    //     currentWeather();
    //     console.log("in localWeather");
    // }

    function getLocation() {
        if (!navigator.geolocation) {
            setStatus("Geolocation is'nt support in your browser");
        } else {
            setStatus("Locating...");
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus("Unable to retrieve your location");
            })
        }
    }


    return (
        <div className="p-weather">
            {status ? <p>{status}</p> : null}
            {Object.keys(reponse).length>0? <WeatherCard cityName={reponse.name} weatherDegree={parseInt(reponse.main.temp_min/10)} weatherState={reponse.weather[0].description} icon={reponse.weather[0].icon} onRefresh={getLocation}/>:null}
        </div>
    );
}

export default WeatherPage;