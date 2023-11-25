'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Componente funcional Nutricao
const Nutricao = ({ idUser }) => {

  const idU = sessionStorage.getItem("idUser");

  const rotaAtual = useRouter();

  const [alimentacoes, setAlimentacoes] = useState([]);

  const [novaAlimentacao, setNovaAlimentacao] = useState({
    tipo: '',
    alimentosConsumidos: '',
    dtaAlim: ''
  });

  useEffect(
    () => {
      fetch(`http://localhost:8080/GSDDD/rest/alimentacao/?id=${idU}`)
        .then(resp => resp.json())
        .then(data => {
          console.log('Dados da alimentacao:', data);

          data.forEach(alimentacao => {
            console.log('ID da Alimentacao:', alimentacao.idAlim);
            // Faça o que precisar com o ID da meta aqui
          });


          setAlimentacoes(data);
        })
        .catch(error => console.error(error));
    }, []
  )

  const handleChange = e => {
    setNovaAlimentacao({ ...novaAlimentacao, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    console.log(novaAlimentacao);
    e.preventDefault();
    fetch(`http://localhost:8080/GSDDD/rest/alimentacao/?id=${idU}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(novaAlimentacao)
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
        console.log('ID da Alimentacao:', data);
      })
      .then(() => window.location.reload())
      .catch(error => console.error(error))

  }

  const handleDelete = (idAlimentacao) => {
    fetch(`http://localhost:8080/GSDDD/rest/alimentacao/?id=${idAlimentacao}`, {
      method: 'DELETE'
    })
      .then(() => window.location.reload())
      .catch(error => console.error(error))
  }

  return (
    <div className='NUTRICAO'>
      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Nutrição</h1>

      <div className="FormNutricao">
        <form onSubmit={handleSubmit}>
          <label>Tipo de Refeição:</label>
          <select name='tipo' value={novaAlimentacao.tipo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="CAFÉ DA MANHÃ">Café da manhã</option>
            <option value="LANCHE DA MANHÃ">Lanche da manhã</option>
            <option value="ALMOÇO">Almoço</option>
            <option value="LANCHE DA TARDE">Lanche da tarde</option>
            <option value="JANTAR">Jantar</option>
            <option value="LANCHE DA NOITE">Lanche da noite</option>
          </select>

          <label>Data:</label>
          <input type="date" name='dtaAlim' value={novaAlimentacao.dtaAlim} onChange={handleChange} />

          <label>Alimentos Consumidos:</label>
          <input type="text" name='alimentosConsumidos' value={novaAlimentacao.alimentosConsumidos} onChange={handleChange} />

          <button type="submit">
            Registrar
          </button>
        </form>
      </div>

      <div className='AlimentosRegistrados'>
        <h2>Alimentos Registrados</h2>
        {alimentacoes.map((alimentacao, index) => (
          <div key={index} className='AlimentoRegistrado'>
            <span>
              Data: {alimentacao.dtaAlim}
            </span>
            <span>
              Tipo de Refeição: {alimentacao.tipo}, Alimentos Consumidos: {alimentacao.alimentosConsumidos}
            </span>
            <button type="button" onClick={() => handleDelete(alimentacao.idAlim)}>
              x
            </button>
          </div>
        ))}
      </div >
      <div className='SobreNutricao'>
        <h2>Uma jornada para o Bem-Estar</h2>
        <p>A nutrição desempenha um papel crucial em nossa saúde e qualidade de vida, sendo nossas escolhas alimentares a base para o funcionamento eficiente do corpo. O registro da alimentação emerge como uma ferramenta poderosa para entender e melhorar nossos hábitos nutricionais. Ao analisar padrões alimentares, ganhamos insights valiosos que transcendem o simples controle de peso, permitindo-nos ajustar nossa dieta para atingir metas específicas e promover uma saúde mais robusta.
        </p>
        <p>Além de ser uma ferramenta para alcançar objetivos físicos, o registro da alimentação desempenha um papel essencial no gerenciamento de condições de saúde específicas. Pessoas com preocupações como diabetes ou hipertensão podem se beneficiar ao documentar suas escolhas alimentares, colaborando com profissionais de saúde para criar estratégias nutricionais personalizadas. Essa abordagem consciente não só melhora a eficácia do tratamento, mas também promove uma relação mais informada e equilibrada com a comida.
        </p>
        <p>Mais do que uma prática, o registro da alimentação é uma jornada de autoconhecimento e autocuidado. Ao desenvolver a consciência alimentar, percebemos o impacto direto dos alimentos em nosso corpo e humor, incentivando escolhas mais saudáveis e sustentáveis. Em resumo, iniciar o hábito de registrar a alimentação é um passo significativo em direção a uma vida mais saudável e equilibrada, repleta de escolhas nutricionais informadas e conscientes.
        </p>
      </div>

    </div>
  );
};

export default Nutricao;