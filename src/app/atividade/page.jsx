'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Atividade = ({ idUser }) => {

  const idU = sessionStorage.getItem("idUser");

  const rotaAtual = useRouter();

  const [atividades, setAtividades] = useState([]);

  const [novaAtividade, setNovaAtividade] = useState({
    tipo: '',
    duracao: '',
    dataAtiv: ''
  });

  useEffect(
    () => {
      fetch(`http://localhost:8080/GSDDD/rest/atividadefisica/?id=${idU}`)
      .then(resp => resp.json())
      .then(data => {
        console.log('Dados da atividade:', data);
  
        const atividadesRecentes = data.filter(atividade => {
          const dataAtividade = new Date(atividade.dataAtiv);
          const hoje = new Date();
          const diffDias = Math.ceil((hoje - dataAtividade) / (1000 * 60 * 60 * 24));
          return diffDias <= 30;
        });
  
        atividadesRecentes.forEach(atividade => {
          console.log('ID da atividade:', atividade.idAF);
        });
  
        setAtividades(atividadesRecentes);
      })
      .catch(error => console.error(error));
    }, []
  )

  const handleChange = e => {
    setNovaAtividade({ ...novaAtividade, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    console.log(novaAtividade);
    e.preventDefault();
    fetch(`http://localhost:8080/GSDDD/rest/atividadefisica/?id=${idU}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(novaAtividade)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('Erro no cadastro', response.status);
          throw new Error('Erro no cadastro');
        }
      })
      .then(data => {
        console.log('ID da atividade:', data);
      })
      .then(() => window.location.reload())
      .catch(error => console.error(error))

  }

  const handleDelete = (idAtividade) => {
    fetch(`http://localhost:8080/GSDDD/rest/atividadefisica/?id=${idAtividade}`, {
      method: 'DELETE'
    })
      .then(() => window.location.reload())
      .catch(error => console.error(error))
  }



  const TIPOS_ATIVIDADE = {
    'CORRIDA' : 'CORRIDA',
    'CAMINHADA': 'CAMINHADA',
    'TRILHA': 'TRILHA',
    'CICLISMO': 'CICLISMO',
    'YOGA': 'YOGA',
    'CANOA': 'CANOA',
    'CAIAQUE': 'CAIAQUE',
    'REMO': 'REMO',
    'SURF': 'SURF',
    'NATAÇÃO': 'NATAÇÃO',
    'PILATES': 'PILATES',
    'MUSCULAÇÃO': 'MUSCULAÇÃO',
    'CROSSFIT': 'CROSSFIT',
    'DANÇA': 'DANÇA',
    'AEROBICA': 'AEROBICA',
    'FUTEBOL': 'FUTEBOL',
    'BASQUETE': 'BASQUETE',
    'ESCALADA': 'ESCALADA',
    'VOLEI': 'VOLEI',
    'OUTROS': 'OUTROS',
  };


  return (

    <div className='ATIVIDADE'>

      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Atividade Física</h1>

      <div className='FormAtividade'>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <select name='tipo' value={novaAtividade.tipo} onChange={handleChange}>
            <option value=''>Selecione</option>
            {Object.keys(TIPOS_ATIVIDADE).map((key) => (
              <option key={key} value={key}>
                {TIPOS_ATIVIDADE[key]}
              </option>
            ))}
          </select>

          <label>Data:</label>
          <input type="date" name='dataAtiv' value={novaAtividade.dataAtiv} onChange={handleChange} />

          <label>Duração (em minutos):</label>
          <input type="number" name='duracao' value={novaAtividade.duracao} onChange={handleChange} />

          <button type="submit" >
            Registrar
          </button>
        </form>
      </div>

      <div className='AtividadeDias'>
        <h2>Últimos 30 dias</h2>
        {atividades.map((atividade, index) => (
          <div key={index} className='AtividadeRegistrada'>
            <span>
              {TIPOS_ATIVIDADE[atividade.tipo]}
            </span>
            <span>{`  Duração: ${atividade.duracao} minutos`}</span>
            <button type="button" onClick={() => handleDelete(atividade.idAtividade)}>
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