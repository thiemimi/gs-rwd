"use client"

import Link from "next/link"
import { useState, useRef } from "react"

export default function Cadastrar(){

    // const numeroRef = useRef(null);

    const [usuario, setUsuario] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        telefone: '',
        email: '',
        senha: '',

    });



    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {
        
        e.preventDefault();

        fetch(`http://localhost:8080/Sprint4/api/cliente/criarconta`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(window.location = '/login')
            .catch(error => console.error(error))
    }

    return(
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
                                    placeholder="Digite seu primeiro nome" onChange={handleChange} required />
                            </div>
                            <div className="cadastrar-input">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name='sobrenome' value={usuario.sobrenome}
                                    placeholder="Digite seu sobrenome" onChange={handleChange} required />
                            </div>
                            <div className="cadastrar-input">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name='cpf' value={usuario.cpf}
                                    placeholder="Digite seu cpf" onChange={handleChange} required />
                            </div>
                            
                            <div className="cadastrar-input">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" value={usuario.email} placeholder="Digite seu email" onChange={handleChange}  required />
                            </div>

                            <div className="cadastrar-input">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" name="telefone"  value={usuario.telefone} placeholder="Digite seu telefone" onChange={handleChange} required />
                            </div>
                            <div className="cadastrar-input">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="password" name="senha" value={usuario.senha} placeholder="Digite sua senha" onChange={handleChange} required />
                            </div>
                        </div>     
                    </form>
                    <div className="Botoes">
                        <Link href={'/'}  className='botao-Cancelar'>Cancelar</Link>
                        <button type='submit' className='botao-Cadastrar'>Criar conta</button>
                    </div>
                    <div className='Logar'>
                        <p>Já possui uma conta?</p>
                        <Link href='/login'>Faça login</Link>
                    </div>
                </div>
        </main>
    )
}