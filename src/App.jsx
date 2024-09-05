import { useState, useEffect } from "react";
import axiosInstance from "./utils/axiosInstance";

import Busca from "./components/BuscaComponents/Busca";
import Clima from "./components/ClimaComponents/Clima";
import Previsao from "./components/PrevisaoComponents/Previsao";

import { Titulo, ClimaContainer } from "./AppStyles";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const [localizacao, setLocalizacao] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const obterLocalizacao = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const resposta = await axiosInstance.get(`/weather`, {
              params: { lat, lon },
            });

            setCidade(resposta.data.name);
            setClima(resposta.data);
            setLocalizacao({ lat, lon });
            setErro(""); // Limpa erros
          },
          (error) => {
            setErro(
              "Não foi possível obter sua localização. Verifique as permissões do navegador."
            );
            // Limpa o erro após 5 segundos
            setTimeout(() => setErro(""), 5000);
          }
        );
      } catch (error) {
        setErro("Erro ao tentar obter a localização. Tente novamente.");
        setTimeout(() => setErro(""), 5000);
      }
    };

    obterLocalizacao();
  }, []);
  

  const buscarClima = async () => {
    try {
      const respostaClima = await axiosInstance.get(`/weather`, {
        params: { q: cidade },
      });
      const respostaPrevisao = await axiosInstance.get(`forecast`, {
        params: { q: cidade },
      });

      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
      setErro(""); // Limpa erros
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErro("Cidade não encontrada. Verifique o nome e tente novamente.");
        } else {
          setErro(
            "Ocorreu um erro ao buscar as informações climáticas. Tente novamente."
          );
        }
        setTimeout(() => setErro(""), 5000);
      } else {
        setErro("Erro na busca. Tente novamente.");
        setTimeout(() => setErro(""), 5000);
      }
    }
  };

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <Clima clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
      {erro && <p className="erro">{erro}</p>}{" "}
    </ClimaContainer>
  );
}

export default App;
