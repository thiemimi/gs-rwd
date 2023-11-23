'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Metas = () => {
  const [novaMeta, setNovaMeta] = useState('');
  const [metas, setMetas] = useState([]);

  const handleRegistrarMeta = () => {
    setMetas([...metas, novaMeta]);
    setNovaMeta('');
  };

  const handleExcluirMeta = (index) => {
    const novasMetas = [...metas];
    novasMetas.splice(index, 1);
    setMetas(novasMetas);
  };

  return (
    <div className='METAS'>
        
      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Metas Pessoais</h1>

      <div className='FormMetas'>
        <form>
          <label>Nova Meta:</label>
          <input type="text" value={novaMeta} onChange={(e) => setNovaMeta(e.target.value)} />
          <button type="button" onClick={handleRegistrarMeta}>
            Registrar
          </button>
        </form>
      </div>

      <div className='MetasRegistradas'>
        <h2>Registradas</h2>
        {metas.map((meta, index) => (
          <div key={index} className='MetaRegistrada'>
            <span>{meta}</span>
            <button type="button" onClick={() => handleExcluirMeta(index)}>
              x
            </button>
          </div>
        ))}
      </div>

      <div className='SobreMetas'>
        <h2>Sobre Metas</h2>
        <p>
          Estabelecer metas pessoais é uma maneira eficaz de direcionar seus esforços
          para alcançar objetivos específicos. Ao definir metas claras e alcançáveis,
          você cria uma direção para sua vida e motivação para atingir o que deseja.
          Registre suas metas pessoais, acompanhe seu progresso e ajuste-as conforme
          necessário. Lembre-se, metas bem definidas podem ser a chave para o sucesso
          e realização pessoal.
        </p>
      </div>

    </div>
  );
};

export default Metas;