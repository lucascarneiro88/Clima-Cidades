import React from "react";
import "./PrevisaoStyles";
import { PrevisaoContainer } from "./PrevisaoStyles";

const Previsao = ({ previsoes, clima }) => {
  if (!previsoes || previsoes.length === 0) {
    return <p>Sem previsões disponíveis</p>;
  }

  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao) => {
          const velocidadeVentoKmH = Math.round(previsao.wind.speed * 3.6); // Arredondando para o inteiro mais próximo

          return (
            <li key={previsao.dt}>
              <img
                src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                alt={previsao.weather[0].description}
              />
              <p>
                {new Date(previsao.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>{previsao.main.temp}°C</p>
              <p>{previsao.weather[0].description}</p>

              <p> Vento: {velocidadeVentoKmH} km/h</p>
            </li>
          );
        })}
      </ul>
    </PrevisaoContainer>
  );
};

export default Previsao;
