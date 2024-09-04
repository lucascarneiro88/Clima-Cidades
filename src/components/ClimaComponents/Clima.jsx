import React from 'react'


import "./CimaStyles";
import { ClimaInformacao } from './CimaStyles';

function Clima({clima}) {
  return (
    <ClimaInformacao>
    <h3>{clima.name}</h3>
    <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
    <p> {clima.main.temp}°C</p>
    <p>{clima.weather[0].description}</p>
    </ClimaInformacao>
  )
}

export default Clima
