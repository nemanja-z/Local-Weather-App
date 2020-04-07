import React, { useEffect, useState } from 'react';
import useGeolocation from 'react-hook-geolocation';
import './Weather.css'
import Icons from './Icons.js'


function Weather() {
    const geolocation = useGeolocation()
    const [info, setInfo] = useState({})
    const url = `https://fcc-weather-api.glitch.me//api/current?lon=${Number(geolocation.longitude)}&lat=${Number(geolocation.latitude)}`;
    const [description, setDescription] = useState({})



    const convert = () => {
        if (info.scale === '°C') {
            setInfo({ ...info, scale: '°F', temp: info.tempF })
        }
        else if (info.scale === '°F') {
            setInfo({ ...info, scale: '°C', temp: info.tempC })
        }
    }

    useEffect(() => {
        async function getWeather() {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setInfo({
                name: data.name,
                temp: Math.round(data.main.temp),
                tempC: Math.round(data.main.temp),
                tempF: Math.round(data.main.temp * 1.8 + 32),
                pressure: Math.round(data.main.pressure),
                humidity: Math.round(data.main.humidity),
                weather: data.weather[0].main,
                country: data.sys.country,
                scale: '°C',
                wind: data.wind.speed,
                date: new Date().toJSON().slice(0, 10)
            });
            setDescription({
                desc: data.weather[0].description,
                id: data.weather[0].id
            })

        }
        getWeather()

    }, [url])



    return !geolocation.error
        ?

        <div>
            <div className='main'>
                <header>{info.name}-{info.country}</header>
                <p>{info.date}</p>
                <Icons
                    description={description} />
                <div className='info'>
                    <button className='btn' onClick={convert}>{info.scale === '°C' ? '°F' : '°C'}</button>
                    <p>{info.temp}{info.scale}</p>

                </div>
            </div>
            <div className='extra'>
                <span>Pressure:{info.pressure}hPa</span>

                <span>Humidity:{info.humidity}%</span>

                <span>Wind speed:{info.wind}m/s</span>
            </div>







        </div>



        : (
            <h1>No geolocation, sorry.</h1>

        )
}

export default Weather
