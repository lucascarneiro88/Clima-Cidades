import React from "react";

function Busca({ cidade, setCidade, buscarClima }) { // Corrigido: desestruturando as props
  return (
    <div>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade..." // Placeholder funcionando corretamente
      />
      <button onClick={buscarClima}>Buscar</button>
    </div>
  );
}

export default Busca;
