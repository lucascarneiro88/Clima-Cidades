import { useState, useEffect } from "react";
import axios from "axios";

import Busca from "./components/BuscaComponents/Busca";
import Clima from "./components/ClimaComponents/Clima";
import Previsao from "./components/PrevisaoComponents/Previsao";

import { Titulo } from "./AppStyles";

function App() {
  const [cidade, setCidade] = useState(""); // string vazia para que seja inserido o nome da cidade
  const [clima, setClima] = useState(null); // array como null para indicar que ainda não há previsões do tempo disponíveis
  const [previsao, setPrevisao] = useState([]); // array vazio para tipo lista
  const [localizacao, setLocalizacao] = useState(null); // Armazenar localização atual

  const apiKey = import.meta.env.VITE_API_KEY || ""; // VARIAVEL PARA BUSCAR DADOS

  // useEffect para acessar a localização atual
  useEffect(() => {
    const obterLocalizacao = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const resposta = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
            );

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
  }, [apiKey]);

  // Função para buscar o clima
  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      if (error.response) {
        console.log("Erro na API:", error.response.status, error.response.data);
      } else {
        console.log("Erro na requisição:", error.message);
      }
    }
  };

  console.log(clima);
  console.log(previsao);

  return (
    <div>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <Clima clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
    </div>
  );
}

export default App;
