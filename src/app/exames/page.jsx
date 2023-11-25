'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Exames = ({ idUser }) => {

  const idU = sessionStorage.getItem("idUser");

  const rotaAtual = useRouter();

  const [exames, setExames] = useState([]);

  const [novoExame, setNovoExame] = useState({
    nomeExame: '',
    dataExame: '',
    horarioExame: ''
  });

  useEffect(
    () => {
      fetch(`http://localhost:8080/GSDDD/rest/examemedico/?id=${idU}`)
        .then(resp => resp.json())
        .then(data => {
          console.log('Dados do Exame:', data);

          data.forEach(exame => {
            console.log('ID da Exame:', exame.idExame);
            // Faça o que precisar com o ID da meta aqui
          });


          setExames(data);
        })
        .catch(error => console.error(error));
    }, []
  )

  const handleChange = e => {
    setNovoExame({ ...novoExame, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    console.log(novoExame);
    e.preventDefault();
    fetch(`http://localhost:8080/GSDDD/rest/examemedico/?id=${idU}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(novoExame)
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
        console.log('ID do Exame:', data);
      })
      .then(() => window.location.reload())
      .catch(error => console.error(error))

  }

  const handleDelete = (idExame) => {
    fetch(`http://localhost:8080/GSDDD/rest/examemedico/?id=${idExame}`, {
      method: 'DELETE'
    })
      .then(() => window.location.reload())
      .catch(error => console.error(error))
  }

  return (

    <div className='EXAMES'>
      <Link href="/explorar" className='BotaoVoltar'>Voltar </Link>
      <h1>Exames</h1>
      <div className="FormExame">
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input type="text" name='nomeExame' value={novoExame.nomeExame} onChange={handleChange} />

          <label>Data:</label>
          <input type="date" name='dataExame' value={novoExame.dataExame} onChange={handleChange} />

          <label>Horário:</label>
          <input type="time" name='horarioExame' value={novoExame.horarioExame} onChange={handleChange} />

          <button type="submit">
            Registrar
          </button>
        </form>
      </div>

      <div className='ExameRegistrado'>
        <h3>Registrados</h3>
        <ul>
          {exames.map((exame, index) => (
            <li key={index} className='RegistroExame'>
              {exame.nomeExame} - Data: {exame.dataExame}, Horário: {exame.horarioExame}
              <button type="button" onClick={()=>handleDelete(exame.idExame)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1> Facilidade e Lembranças para uma Vida Saudável</h1>
        <p>O registro de exames é uma prática valiosa que transcende o simples ato de documentar informações médicas. Ao deixar registrado cada exame realizado, criamos uma poderosa ferramenta para gerenciar nossa saúde de maneira proativa. A facilidade de manter esses registros permite-nos estar sempre a par de nossa condição médica, promovendo uma abordagem preventiva e informada para o bem-estar.</p>
        <p>A rotina agitada muitas vezes nos faz esquecer detalhes importantes sobre nossa saúde. No entanto, ao registrar exames, criamos um arquivo digital acessível a qualquer momento. Essa praticidade não apenas simplifica consultas médicas, mas também auxilia na tomada de decisões informadas sobre tratamentos, medicamentos e estilo de vida. Lembrar datas e resultados de exames torna-se crucial para uma comunicação eficiente com profissionais de saúde, promovendo uma parceria ativa em nosso cuidado.</p>
        <p>Mais do que uma tarefa burocrática, o registro de exames é um ato de autocuidado. A facilidade de acesso a essas informações não apenas simplifica o acompanhamento de nossa saúde, mas também serve como um lembrete constante da importância de priorizar nosso bem-estar. Ao integrar o registro de exames em nossa rotina, investimos em uma vida mais saudável e consciente, onde a prevenção e a prontidão são aliadas fundamentais para uma jornada de saúde plena.</p>
      </div>


    </div>
  );
};

export default Exames;
