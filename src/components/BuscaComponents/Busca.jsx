import React from "react";
import { normalizarCidade } from "../../utils/normalizaCidade";
import { BotaoBuscar, BuscaCidade, BuscaContainer } from "./BuscaStyles";

function Busca({ cidade, setCidade, buscarClima }) {
  const handleBuscar = () => {
    const cidadeNormalizada = normalizarCidade(cidade);
    buscarClima(cidadeNormalizada);
  };

  return (
    <BuscaContainer>
      <BuscaCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade..."
      />
      <BotaoBuscar onClick={handleBuscar}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
}

export default Busca;
