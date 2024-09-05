import React from "react";

import "./CimaStyles";
import { ClimaInformacao } from "./CimaStyles";

function Clima({ clima }) {
  // Converter a velocidade do vento de m/s para km/h
  const velocidadeVentoKmH = Math.round(clima.wind.speed * 3.6);

  return (
    <ClimaInformacao>
      <h3>
        {clima.name}, {clima.sys.country}
      </h3>
      <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>
        Hora:
        {new Date(clima.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      {/* Temperatura */}
      <p>{clima.main.temp}°C</p>
      {/* Descrição */}
      <p>{clima.weather[0].description}</p>
      {/* Velocidade do Vento em km/h */}
      <p>Vento: {velocidadeVentoKmH} km/h</p>
      {/* Direção do Vento */}
      {/* <p>Direção do Vento: {clima.wind.deg}°</p> */}
      {/* Pressão */}
      {/* <p>Pressão: {clima.main.pressure} hPa</p> */}
      {/* Umidade */}
      <p>Umidade: {clima.main.humidity}%</p>
      {/* Cobertura de Nuvens */}
      <p>Nuvens: {clima.clouds.all}%</p>
    </ClimaInformacao>
  );
}

export default Clima;
