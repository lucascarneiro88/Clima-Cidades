

import Busca from "./components/BuscaComponents/Busca";
import Clima from "./components/ClimaComponents/Clima";
import Previsao from "./components/PrevisaoComponents/Previsao";

import {Titulo} from "./AppStyles";

function App() {


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
