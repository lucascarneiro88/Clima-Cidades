import React from "react";

import "./PrevisaoStyles";

const Previsao = ({ previsoes }) => {
  if (!previsoes || previsoes.length === 0) {
    return <p>Sem previsões disponíveis</p>;
  }

  return (
    <div>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao) => (
          <li key={previsao.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            <p>Temperatura: {previsao.main.temp}°C</p>
            <p>Descrição da temperatura: {previsao.weather[0].description}</p>
            <p>Hora da previsão: {new Date(previsao.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Previsao;
