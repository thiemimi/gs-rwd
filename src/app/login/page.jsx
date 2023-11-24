"use client";

import Image from "next/image";
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Login({params}) {

    const idUser = params.id == 0 ? '' : params.id;

    const [msgstatus, setMsgstatus] = useState("");
    const [classStatus, setClassStatus] = useState("");
    const [usuario, setUsuario] = useState({
        email: '',
        senha: '',
        id: ''
    });
    
    const handleChange = async (e) => {
        const { name, value } = e.target;
    
        await setUsuario({ ...usuario, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`http://localhost:8080/GSDDD/rest/conta/login?email=${usuario.email}&senha=${usuario.senha}`);
    
            if (response.ok) {
                const data = await response.json();
    
                if (data.IdUsuario) {
                    setUsuario((prevState) => ({
                        ...prevState,
                        id: data.IdUsuario
                    }));

                    sessionStorage.setItem("idUser", data.IdUsuario);
    
                    const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    sessionStorage.setItem("token-user", token);
                    sessionStorage.setItem("user-obj", JSON.stringify(data));
    
                    setMsgstatus("Login realizado com sucesso!");
                    setClassStatus("login-sucesso");
    
                    setTimeout(() => {
                        window.location = `/?id=${data.IdUsuario}`;
                    }, 5000);
                } else {
                    setMsgstatus("Usuário e/ou senha incorretos!");
                    setClassStatus("login-erro");
    
                    setTimeout(() => {
                        setMsgstatus("");
                        setUsuario({
                            email: "",
                            senha: ""
                        });
                    }, 5000);
                }
            } else {
                console.error('Login falhou.');
                throw new Error('Login falhou.');
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div className="LOGIN">
            <div className="LoginContent">
                <Image src={'/logo.png'} alt='logo' width={150} height={150}/>
                <h3>Faça seu Login</h3>
                <p>Explore o caminho para a saúde e bem-estar</p>
            </div>
            <div className="FormLogin">
                <form onSubmit={handleSubmit}>   
                    <div className="Login-inputs">
                        <div className="Login-input">
                            <input type="email" name="email" id="idEmail" placeholder="Digite o seu email" value={usuario.email} onChange={handleChange}/>
                        </div>

                        <div className="Login-input">
                            <input type="password" name="senha" id="idSenha" placeholder="Digite a sua senha" value={usuario.senha} onChange={handleChange}/>
                        </div>
                    </div>    
                    <p className="classStatus">{msgstatus}</p>
                    <div className="Botao">
                        <button>LOGIN</button>
                    </div>
                    <div className="Cadastre-se">
                        <p>Ainda não possui uma conta?</p>
                        <Link href={'/cadastrar'}>Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}