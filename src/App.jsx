// import axios from "axios";
import { useState, useEffect } from "react";

import axiosInstance from "./utils/axiosInstance";

import Busca from "./components/BuscaComponents/Busca";
import Clima from "./components/ClimaComponents/Clima";
import Previsao from "./components/PrevisaoComponents/Previsao";

import { Titulo, ClimaContainer } from "./AppStyles";

function App() {
  const [cidade, setCidade] = useState(""); // string vazia para que seja inserido o nome da cidade
  const [clima, setClima] = useState(null); // array como null para indicar que ainda não há previsões do tempo disponíveis
  const [previsao, setPrevisao] = useState([]); // array vazio para tipo lista
  const [localizacao, setLocalizacao] = useState(null); // Armazenar localização atual

  // useEffect para acessar a localização atual
  useEffect(() => {
    const obterLocalizacao = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log(`Latitude: ${lat}, Longitude: ${lon}`);

            const resposta = await axiosInstance.get(`/weather`, {
              params: { lat, lon },
            });

            setCidade(resposta.data.name);
            setClima(resposta.data);
            setLocalizacao({ lat, lon }); // Atualizar localização
          },
          (error) => {
            console.log("Erro na obtenção da localização:", error.message);
          }
        );
      } catch (error) {
        console.log("Erro ao obter a localização:", error.message);
      }
    };

    obterLocalizacao();
  }, []);

  // Função para buscar o clima
  const buscarClima = async () => {
    try {
      const respostaClima = await axiosInstance.get(`/weather`, {
        params: { q: cidade },
      });
      const respostaPrevisao = await axiosInstance.get(`forecast`, {
        params: { q: cidade },
      });

      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5)); // busca as primeira 5 proximas previsões da lista
    } catch (error) {
      if (error.response) {
        console.log("Erro na API:", error.response.status, error.response.data);
      } else {
        console.log("Erro na requisição:", error.message);
      }
    }
  };

  // console.log(clima);
  // console.log(previsao);

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <Clima clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
      {/* {localizacao && (
        <div>
          <p>Latitude: {localizacao.lat}</p>
          <p>Longitude: {localizacao.lon}</p>
        </div>
      )} */}
    </ClimaContainer>
  );
}

export default App;
