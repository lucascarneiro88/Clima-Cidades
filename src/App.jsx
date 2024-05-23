import { useState, useEffect} from "react";
import axios from "axios";


import Busca from "./components/BuscaComponents/Busca";
import Clima from "./components/ClimaComponents/Clima";
import Previsao from "./components/PrevisaoComponents/Previsao";



import {Titulo} from "./AppStyles";


function App() {

  const [cidade, setCidade] = useState("");// string vazia para que seja inserido o nome da cidade
  const [clima, setClima] = useState(null);// array como null para indicar que ainda não há previsões do tempo disponíveis
  const [previsao, setPrevisao] =useState([]);//array vazio para tipo lista



  return (
    <div>
      <Titulo>Condições Climáticas</Titulo>
      <Busca />
      <Clima />
      <Previsao />

    </div>
  );
}

export default App;
