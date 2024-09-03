import React from 'react'


import "./CimaStyles";

function Clima({clima}) {
  return (
    <div>
    <h3>Cidade: {clima.name}</h3>
    <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
    <p>Temperatura: {clima.main.temp}°C</p>
    <p>Descrição da temperatura: {clima.weather[0].description}</p>
    </div>
  )
}

export default Clima
