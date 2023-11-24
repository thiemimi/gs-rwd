'use client'

import { useState } from 'react';
import Link from 'next/link';



const Exames = () => {
  const [nomeExame, setNomeExame] = useState('');
  const [dataExame, setDataExame] = useState('');
  const [horarioExame, setHorarioExame] = useState('');
  const [examesRegistrados, setExamesRegistrados] = useState([]);

  const handleRegistrarExame = () => {
    const novoExame = {
      nome: nomeExame,
      data: dataExame,
      horario: horarioExame,
    };

    setExamesRegistrados([...examesRegistrados, novoExame]);

    setNomeExame('');
    setDataExame('');
    setHorarioExame('');
  };

  const handleExcluirExame = (index) => {
    const novosExames = [...examesRegistrados];
    novosExames.splice(index, 1);
    setExamesRegistrados(novosExames);
  };

  return (

    <div className='EXAMES'>
      <Link href="/explorar" className='BotaoVoltar'>Voltar </Link>
      <h1>Exames</h1>
      <div className="FormExame">
        <form>
          <label>Nome:</label>
          <input type="text" value={nomeExame} onChange={(e) => setNomeExame(e.target.value)} />

          <label>Data:</label>
          <input type="date" value={dataExame} onChange={(e) => setDataExame(e.target.value)} />

          <label>Horário:</label>
          <input type="time" value={horarioExame} onChange={(e) => setHorarioExame(e.target.value)} />

          <button type="button" onClick={handleRegistrarExame}>
            Registrar
          </button>
        </form>
      </div>

      <div className='ExameRegistrado'>
        <h3>Registrados</h3>
        <ul>
          {examesRegistrados.map((exame, index) => (
            <li key={index} className='RegistroExame'>
              {exame.nome} - Data: {exame.data}, Horário: {exame.horario}
              <button type="button" onClick={() => handleExcluirExame(index)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
};

export default Exames;
