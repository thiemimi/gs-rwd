"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cabecalho({ idUser }){
    
    const userId = sessionStorage.getItem("idUser");

    const rotaAtual = useRouter();
    const userLogado = JSON.parse(sessionStorage.getItem("user-obj"));
    const [usuario] = useState(userLogado);

    const handleLogout = ()=>{
        sessionStorage.removeItem("token-user")
        sessionStorage.removeItem("user-obj")
        router.push('/login');
    }

    if (sessionStorage.getItem("token-user")){
        return(
            <header className="Cabecalho">
                
                <nav>
                    <div className="Logo">
                        <Image src={'/logo.png'} alt='logo' width={70} height={65}/>
                    </div>
                    <div className="Menu">
                        <Link href={'/'} className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link>
                        <Link href={'/sobrenos'} className={rotaAtual.pathname == "/sobrenos" ? "active" : ""}> Sobre Nos</Link>
                        {/* <Link href={'/produto'} className={rotaAtual.pathname == "/produto" ? "active" : ""}> Produto</Link> */}
                        <Link href={`/resumo/?id=${userId}`} className={rotaAtual.pathname == "/resumo" ? "active" : ""}>Resumo</Link>
                        <Link href={`/explorar/?id=${userId}`} className={rotaAtual.pathname == "/explorar" ? "active" : ""}>Explorar</Link>
                        
                    </div>
                    <div className="LogarCadastrar">
                        <Link href={'/login'} className={rotaAtual.pathname == "/login" ? "active" : ""} onClick={handleLogout}>Logout</Link>
                    </div>
                </nav>
                
            </header>
        )
    }else{
        return(
            <header className="Cabecalho">
                
                <nav>
                    <div className="Menu">
                        <Link href={'/'} className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link>
                        <Link href={'/sobrenos'} className={rotaAtual.pathname == "/sobrenos" ? "active" : ""}> Sobre Nos</Link>
                        {/* <Link href={'/produto'} className={rotaAtual.pathname == "/produto" ? "active" : ""}> Produto</Link> */}
                    </div>
                    <div className="LogarCadastrar">
                        <Link href={'/login'} className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link>
                        <Link href={'/cadastrar'} className={rotaAtual.pathname == "/cadastrar" ? "active" : ""}>Cadastrar</Link>
                    </div>
                </nav>
                
            </header>
        )
    }

}