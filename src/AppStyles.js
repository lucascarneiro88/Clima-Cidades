import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ClimaContainer = styled.div`
  background: linear-gradient(to bottom, #89cff0, #005c99);

  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .erro {
    color: #ff0000; /* Cor vermelha para o texto */
    font-size: 18px; /* Ajuste o tamanho da fonte conforme necessário */
    background-color: #ffe6e6; /* Cor de fundo clara para destacar a mensagem */
    border: 1px solid #ff0000; /* Borda vermelha para contorno */
    padding: 10px; /* Espaçamento interno */
    margin-top: 10px; /* Espaçamento externo acima da mensagem */
    border-radius: 5px; /* Bordas arredondadas para um visual mais suave */
    text-align: center; /* Centraliza o texto dentro do parágrafo */
  }
`;
