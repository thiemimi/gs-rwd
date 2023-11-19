"use client";

import Image from "next/image";
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Login() {
    
    const [msgstatus, setMsgstatus] = useState("");
    const [classStatus, setClassStatus] = useState("");
    const [usuario, setUsuario] = useState({
        email:"",
        senha:""
    })
    const handleChange = async (e)=>{
        const{name, value} = e.target;

        await setUsuario({...usuario,[name]:value})
    };

    useEffect(()=>{

        if(msgstatus == "Login realizado com sucesso!"){
            setClassStatus("login-sucesso");
        }else if(msgstatus == "Usuário e/ou senha incorretos!"){
            setClassStatus("login-erro");
        }else{
            setClassStatus("login");
        }

    }, [msgstatus])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let user;

        try{
            const response = await fetch("http://localhost:5000/usuarios")

            if(response.ok){
                const users = await response.json();

                for (let x = 0; x < users.length; x++) {
                    const u = users[x];

                    if(u.email == usuario.email && u.senha == usuario.senha){
                        user = u;

                        break;
                    }
                }

                if(user){
                    setMsgstatus("Login realizado com sucesso!")

                    const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    
                    sessionStorage.setItem("token-user", token);
                    sessionStorage.setItem("user-obj", JSON.stringify(user))

                    setTimeout(()=>{
                        window.location = "/";
                    }, 5000)
                }else{
                    setMsgstatus("Usuário e/ou senha incorretos!")

                    setTimeout(()=>{

                        setMsgstatus("");

                        setUsuario({
                            "email":"",
                            "senha":""
                        })
        
                        window.location = "/login";

                    }, 5000);
                }
            }else{
                setUsuario({
                    "email":"",
                    "senha":""
                })

                window.location = "/login";
            }
        }catch(error){
            console.log(error);
        }

    }
    return(
        <div className="LOGIN">
            <div className="LoginContent">
                <Image src={'/logo.png'} alt='logo' width={150} height={150}/>
                <h3>Faça seu Login</h3>
                <p>Explore o caminho para a saúde e bem-estar</p>
            </div>
            <div className="Formulario">
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