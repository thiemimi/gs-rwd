'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Atividade = () => {
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [outraAtividade, setOutraAtividade] = useState('');
  const [duracaoAtividade, setDuracaoAtividade] = useState('');
  const [atividadesRegistradas, setAtividadesRegistradas] = useState([]);

  const TIPOS_ATIVIDADE = {
    1: 'Corrida',
    2: 'Caminhada',
    3: 'Trilha',
    4: 'Pedalada',
    5: 'Bicicleta Elétrica',
    6: 'Canoa',
    7: 'Caiaque',
    8: 'Remo',
    9: 'Surfe',
    10: 'Natação',
    0: 'Outros',
  };

  useEffect(() => {
    const atividadesRecentes = atividadesRegistradas.filter((atividade) => {
      const dataAtividade = new Date(atividade.data);
      const hoje = new Date();
      const diffDias = Math.ceil((hoje - dataAtividade) / (1000 * 60 * 60 * 24));
      return diffDias <= 30;
    });

    setAtividadesRegistradas(atividadesRecentes);
  }, []);

  const handleRegistrarAtividade = () => {
    const novaAtividade = {
      tipo: tipoAtividade,
      outra: outraAtividade,
      duracao: duracaoAtividade,
      data: new Date().toISOString(),
    };

    setAtividadesRegistradas([...atividadesRegistradas, novaAtividade]);

    setTipoAtividade('');
    setOutraAtividade('');
    setDuracaoAtividade('');
  };

  const handleExcluirAtividade = (index) => {
    const novasAtividades = [...atividadesRegistradas];
    novasAtividades.splice(index, 1);
    setAtividadesRegistradas(novasAtividades);
  };

  return (
    
    <div className='ATIVIDADE'>
      
      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Atividade Física</h1>

      <div className='FormAtividade'>
        <form>
          <label>Nome:</label>
          <select value={tipoAtividade} onChange={(e) => setTipoAtividade(e.target.value)}>
            <option value="">Selecione</option>
            {Object.keys(TIPOS_ATIVIDADE).map((key) => (
              <option key={key} value={key}>
                {TIPOS_ATIVIDADE[key]}
              </option>
            ))}
          </select>

          {tipoAtividade === '0' && (
            <div className='NomeAtividade'>
              <label>Digite o nome da atividade:</label>
              <input type="text" value={outraAtividade} onChange={(e) => setOutraAtividade(e.target.value)} />
            </div>
          )}

          <label>Duração (em minutos):</label>
          <input type="number" value={duracaoAtividade} onChange={(e) => setDuracaoAtividade(e.target.value)} />

          <button type="button" onClick={handleRegistrarAtividade}>
            Registrar
          </button>
        </form>
      </div>

      <div className='AtividadeDias'>
        <h2>Últimos 30 dias</h2>
        {atividadesRegistradas.map((atividade, index) => (
          <div key={index} className='AtividadeRegistrada'>
            <span>
              {TIPOS_ATIVIDADE[atividade.tipo]}
              {atividade.outra && ` ${atividade.outra}`}
            </span>
            <span>{`  Duração: ${atividade.duracao} minutos`}</span>
            <button type="button" onClick={() => handleExcluirAtividade(index)}>
              x
            </button>
          </div>
        ))}
      </div>

      <div className='AtividadeImportancia'>
        <h2>Importancia</h2>
        <p>
          A prática regular de atividades físicas traz inúmeros benefícios para a saúde, incluindo a melhoria do condicionamento
          cardiovascular, fortalecimento muscular, controle do peso corporal e aumento da sensação de bem-estar. Lembre-se de
          escolher atividades que você desfrute para tornar o exercício uma parte sustentável de seu estilo de vida.
        </p>
      </div>

      
    </div>
  );
};

export default Atividade;