'use client';

import Image from "next/image";

export default function Configuracoes() {

  function abrirAba(idAba) {
    let conteudos = document.getElementsByClassName('Conteudo');

    for (let i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = 'none';
    }

    document.getElementById(idAba).style.display = 'block';
}

  return (
    <main className="CONFIGURACOES">
      <div className="TextoConfiguracoes">
        <h1>CONFIGURAÇÕES</h1>
        <p>Mude seu perfil e suas configurações</p>
      </div>
      <div className="Abas">
        <div className="BotoesConfiguracoes">
          <button onClick={() => abrirAba('perfil')}>Perfil</button>
          <button onClick={() => abrirAba('registro')}>Registro de atividades</button>
          <button onClick={() => abrirAba('estatistica')}>Visualizar estatísticas</button>
        </div>

        <div id='perfil' className="Conteudo">
          <h1>Perfil</h1>
          <div className="DadosPerfil">
            <div className="input-box-DadosPessoais">
                    <p>Nome</p>
                    <label htmlFor="Nome">Nome</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Email</p>
                    <label htmlFor="Email">Email</label> 
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Senha</p>
                    <label htmlFor="Senha">Senha</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Telefone</p>
                    <label htmlFor="Telefone">Telefone</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>CPF</p>
                    <label htmlFor="CPF">CPF</label>
                </div>
          </div>
        </div>
        <div id='registro' className="Conteudo">
          <h1>Registro de atividades</h1>
          <div className="Registros">
            <h2>Atividade física</h2>
          </div>
          <div className="Registros">
            <h2>Alimentação</h2>
          </div>
        </div>
        <div id='estatistica' className="Conteudo">
          <h1>Visualizar estatísticas</h1>
          <Image src={'/grafico.png'} alt="grafico" width={450} height={450}/>
        </div>
      </div>
    </main>
  );
}