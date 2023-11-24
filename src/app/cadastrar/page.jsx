"use client"

import Link from "next/link"
import { useState, useRef } from "react"

export default function Cadastrar() {

    // const numeroRef = useRef(null);

    const [usuario, setUsuario] = useState({
        nome: '',
        cpf: '',
        genero: '',
        idade: '',
        email: '',
        senha: '',
        objetivo: ''
    });



    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {

        e.preventDefault();

        fetch("http://localhost:8080/GSDDD/rest/conta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(data => {
                console.log("Data", usuario);

                window.location = '/login';
            })
            .catch(error => console.error(error))
    }

    return (
        <main className="CADASTRAR">
            <div className="CadastrarContent">
                <h1>Cadastra-se</h1>
            </div>
            <div className='FormCadastrar'>
                <form onSubmit={handleSubmit}>
                    <div className="cadastrar-inputs">
                        <div className="cadastrar-input">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name='nome' value={usuario.nome}
                                placeholder="Digite seu nome completo" onChange={handleChange} required />
                        </div>

                        <div className="cadastrar-input">
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" name='cpf' value={usuario.cpf}
                                placeholder="Digite seu cpf" onChange={handleChange} required />
                        </div>

                        <div className="cadastrar-input">
                            <label htmlFor="genero">Gênero</label>
                            <select name="genero" className="tamanho" onChange={handleChange} required value={usuario.genero}>
                                <option value="nd">Escolha seu gênero</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="NB">Não-binário</option>
                                <option value="NR">Prefiro não dizer</option>
                            </select>
                        </div>

                        <div className="cadastrar-input">
                            <label htmlFor="objetivo">Objetivo</label>
                            <select name="objetivo" className="tamanho" onChange={handleChange} required value={usuario.objetivo}>
                                <option value="">Escolha seu objetivo</option>
                                <option value="UM">Estou grávida</option>
                                <option value="DOIS">Quero melhorar minha saúde</option>
                                <option value="TRES">Quero saber como posso evitar doenças transmissíveis</option>
                                <option value="QUATRO">Quero ter hábitos saudáveis</option>
                            </select>
                        </div>

                        <div className="cadastrar-input">
                            <label htmlFor="idade">Idade</label>
                            <input id="idade" type="number" name="idade" value={usuario.idade} placeholder="Digite sua idade" onChange={handleChange} required />
                        </div>

                        <div className="cadastrar-input">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" value={usuario.email} placeholder="Digite seu email" onChange={handleChange} required />
                        </div>

                        <div className="cadastrar-input">
                            <label htmlFor="senha">Senha</label>
                            <input id="senha" type="password" name="senha" value={usuario.senha} placeholder="Digite sua senha" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="Botoes">
                        <Link href={'/'} className='botao-Cancelar'>Cancelar</Link>
                        <button type='submit' className='botao-Cadastrar'>Criar conta</button>
                    </div>
                </form>

                <div className='Logar'>
                    <p>Já possui uma conta?</p>
                    <Link href='/login'>Faça login</Link>
                </div>
            </div>
        </main>
    )
}