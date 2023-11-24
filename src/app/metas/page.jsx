'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Metas = ({ idUser }) => {

  const idU = sessionStorage.getItem("idUser");

  const rotaAtual = useRouter();

  const [metas, setMetas] = useState([]);

  const [novaMeta, setNovaMeta] = useState({
    mensagem: '',
  });

  useEffect(
    () => {
      fetch(`http://localhost:8080/GSDDD/rest/metas/?id=${idU}`)
      .then(resp => resp.json())
      .then(data => {
        console.log('Dados da meta:', data);
  
        data.forEach(meta => {
          console.log('ID da meta:', meta.idMeta);
          // Faça o que precisar com o ID da meta aqui
        });
 
        setMetas(data);
      })
        .catch(error => console.error(error))
    }, []
  )

  const handleChange = e => {
    setNovaMeta({ ...novaMeta, mensagem: e.target.value });
  }

  const handleSubmit = e => {
    console.log(novaMeta);
    e.preventDefault();
    fetch(`http://localhost:8080/GSDDD/rest/metas/?id=${idU}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(novaMeta)
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
        console.log('ID da meta:', data);
      })
      .then(() => window.location.reload())
      .catch(error => console.error(error))

  }

  const handleDelete = (idMeta) => {
    fetch(`http://localhost:8080/GSDDD/rest/metas/?id=${idMeta}`, {
      method: 'DELETE'
    })
    .then(() => window.location.reload())
    .catch(error => console.error(error))
  }


  return (
    <div className='METAS'>

      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Metas Pessoais</h1>

      <div className='FormMetas'>
        <form onSubmit={handleSubmit}>
          <label>Nova Meta:</label>
          <input type="text" name='mensagem' value={novaMeta.mensagem} onChange={handleChange} />
          <button type="submit" >
            Registrar
          </button>
        </form>
      </div>

      <div className='MetasRegistradas'>
        <h2>Registradas</h2>
        {metas.map((meta, index) => (
          <div key={index} className='MetaRegistrada'>
            <span>{meta.mensagem}</span>
            <button type="button" onClick={() => handleDelete(meta.idMeta)}>
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