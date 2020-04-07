import React from 'react'
import WeatherIcon from 'react-icons-weather';


function Icons({ description }) {
    const { id } = description;

    const desc = id => {
        if (id < 233) {
            return <div><WeatherIcon name="owm" iconId='211' flip="horizontal" rotate="90" /></div>
        }
        else if (id > 299 && id < 322) {
            return <div><WeatherIcon name="owm" iconId='301' flip="horizontal" rotate="90" /></div>
        } else if (id > 499 && id < 522) {
            return <div><WeatherIcon name="owm" iconId='501' flip="horizontal" rotate="90" /></div>
        } else if (id > 599 && id < 622) {
            return <div><WeatherIcon name="owm" iconId='601' flip="horizontal" rotate="90" /></div>
        } else if (id > 700 && id < 782) {
            return <div><WeatherIcon name="owm" iconId='701' flip="horizontal" rotate="90" /></div>
        } else if (id === 800) {
            return <div><WeatherIcon name="owm" iconId='800' flip="horizontal" rotate="90" /></div>
        } else {
            return <div><WeatherIcon name="owm" iconId='803' flip="horizontal" rotate="90" /></div>
        }
    }
    return (
        <div>
            {desc(id)}
        </div>
    )
}

export default Icons
