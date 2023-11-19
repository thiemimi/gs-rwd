"use client";

import { useState, useEffect } from "react"

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
                    setMsgstatus("Login realizado com SUCESSO!")

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
            <h2 className="classStatus">{msgstatus}</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados de Acesso: </legend>

                        <div>
                            <label htmlFor="idEmail">Email: </label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite o seu email." value={usuario.email} onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="idSenha">Senha: </label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite a sua senha." value={usuario.senha} onChange={handleChange}/>
                        </div>

                        <div>
                            <button>LOGIN</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}