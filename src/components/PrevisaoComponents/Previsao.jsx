import React from 'react';

const Previsao = ({ previsoes }) => {
  return (
    <div>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao) => (
          <li >
             <img src="" alt="" />
             °C - descrição
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Previsao;
