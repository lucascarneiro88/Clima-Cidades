import axios from "axios";

//criando a instancia do Axios
const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/", // URL base da API
  params: {
    appid: import.meta.env.VITE_API_KEY, // A chave da API, vinda das variáveis de ambiente
    units: "metric", // Unidades de medida da Api
    lang: "pt_br", // Idioma
  },
});

export default axiosInstance;
