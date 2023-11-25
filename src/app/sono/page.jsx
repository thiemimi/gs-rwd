'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Sono = () => {

  const idU = sessionStorage.getItem("idUser");

  const rotaAtual = useRouter();

  const [sonos, setSonos] = useState([]);

  const [novoSono, setnovoSono] = useState({
    duracao: '',
    dataSono: '',
    meta: ''
  });

  

  useEffect(
    () => {
      fetch(`http://localhost:8080/GSDDD/rest/sono/?id=${idU}`)
        .then(resp => resp.json())
        .then(data => {
          console.log('Dados do Sono:', data);

          data.forEach(sono => {
            console.log('ID do Sono:', sono.idSono);
            // Faça o que precisar com o ID da meta aqui
          });

          setSonos(data);
        })
        .catch(error => console.error(error));
    }, []
  )

  const handleChange = e => {
    setnovoSono({ ...novoSono, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    console.log(novoSono);
    e.preventDefault();
    fetch(`http://localhost:8080/GSDDD/rest/sono/?id=${idU}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(novoSono)
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
        console.log('ID do Sono:', data);
      })
      .then(() => window.location.reload())
      .catch(error => console.error(error))

  }

  const handleDelete = (idSono) => {
    fetch(`http://localhost:8080/GSDDD/rest/sono/?id=${idSono}`, {
      method: 'DELETE'
    })
      .then(() => window.location.reload())
      .catch(error => console.error(error))
  }

  function converterMinutosParaHoras(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
  
    return `${horas}:${minutosRestantes < 10 ? '0' : ''}${minutosRestantes}`;
  }

  return (
    <div className='SONO'>
      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Sono</h1>

      <div className="FormSono">

        <form onSubmit={handleSubmit}>
          <label>Meta:</label>
          <input type="number" name='meta' value={novoSono.meta} onChange={handleChange} placeholder='Meta de sono em minutos' />
          <label>Adicionar tempo de sono:</label>
          <input type="number" name='duracao' value={novoSono.duracao} onChange={handleChange} placeholder='Duração do seu tempo de sono em minutos'/>
          <label>Data:</label>
          <input type="date" name='dataSono' value={novoSono.dataSono} onChange={handleChange} />
          <button type="submit">
            Registrar
          </button>
        </form>
      </div>



      <div className='SonoRegistrado'>
        <h2>Registrados</h2>
        <p>{sonos.duracao && `${sonos.duracao}h`}</p>
        <ul>
          {sonos.map((sono, index) => (
            <li key={index} className='RegistroSono'>
              Duração: {sono.duracao} - {`${converterMinutosParaHoras(sono.duracao)} horas`} - Data: {sono.dataSono}, Meta: {sono.meta} - {`${converterMinutosParaHoras(sono.meta)} horas`} 
              <button type="button" onClick={()=>handleDelete(sono.idSono)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="SobreSono">
        <h2>Sobre o sono</h2>
        <p>
          O recurso Sono fornece informações sobre
          seus hábitos. Monitores de sono podem ajudar
          a determinar a quantidade de tempo que você
          passa na cama e dormindo. Estes dispositivos
          estimam seu tempo na cama e seu tempo
          dormindo ao analisar mudanças na atividade
          física, incluindo o movimento durante a noite.
          Você também pode acompanhar o seu sono
          digitando manualmente sua própria estimativa
          da hora em que foi dormir e por quanto tempo.
        </p>

        <p>
          O período "Na Cama" reflete o tempo que você
          passa deitado na cama com a intenção de
          dormir. Para a maioria das pessoas, isso
          começa quando você apaga as luzes e termina
          quando você sai da cama. O período
          "Dormindo" reflete o tempo que você passa
          dormindo.
        </p>
      </div>
    </div>
  );
};

export default Sono;