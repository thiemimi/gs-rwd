'use client'

import { useState } from 'react';
import Link from 'next/link';

// Componente funcional Nutricao
const Nutricao = () => {
  // Estados locais
  const [tipoRefeicao, setTipoRefeicao] = useState('');
  const [alimentosConsumidos, setAlimentosConsumidos] = useState('');
  const [alimentosRegistrados, setAlimentosRegistrados] = useState([]);

  // Função para registrar alimentação
  const handleRegistrarAlimentacao = () => {
    const novaAlimentacao = {
      tipoRefeicao,
      alimentosConsumidos,
    };

    setAlimentosRegistrados([...alimentosRegistrados, novaAlimentacao]);

    // Limpar os campos após o registro
    setTipoRefeicao('');
    setAlimentosConsumidos('');
  };

  // Função para excluir alimentação
  const handleExcluirAlimentacao = (index) => {
    const novaListaAlimentos = [...alimentosRegistrados];
    novaListaAlimentos.splice(index, 1);
    setAlimentosRegistrados(novaListaAlimentos);
  };

  // Renderização do componente
  return (
    <div>
      <h1>Nutrição</h1>

      {/* Formulário para registrar alimentação */}
      <form>
        <label>Tipo de Refeição:</label>
        <select value={tipoRefeicao} onChange={(e) => setTipoRefeicao(e.target.value)}>
          <option value="">Selecione</option>
          <option value="1">Café da manhã</option>
          <option value="2">Lanche da manhã</option>
          <option value="3">Almoço</option>
          <option value="4">Lanche da tarde</option>
          <option value="5">Jantar</option>
          <option value="6">Lanche da noite</option>
        </select>

        <label>Alimentos Consumidos:</label>
        <input type="text" value={alimentosConsumidos} onChange={(e) => setAlimentosConsumidos(e.target.value)} />

        <button type="button" onClick={handleRegistrarAlimentacao}>
          Registrar
        </button>
      </form>

      {/* Lista de alimentos registrados */}
      <div>
        <h2>Alimentos Registrados</h2>
        {alimentosRegistrados.map((alimentacao, index) => (
          <div key={index}>
            <span>
              Tipo de Refeição: {alimentacao.tipoRefeicao}, Alimentos Consumidos: {alimentacao.alimentosConsumidos}
            </span>
            <button type="button" onClick={() => handleExcluirAlimentacao(index)}>
              x
            </button>
          </div>
        ))}
      </div>

      {/* Botão para voltar para Explorar */}
      <Link href="/explorar">Voltar</Link>
    </div>
  );
};

export default Nutricao;