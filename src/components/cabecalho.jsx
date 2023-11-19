import Image from "next/image"
import Link from "next/link"

export default function Cabecalho(){

    return(
        <header className="Cabecalho">
            <Image/>
            <nav>
                <div className="Menu">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/resumo'}>Resumo</Link>
                    <Link href={'/explorar'}>Explorar</Link>
                </div>
                <div className="LogarCadastrar">
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/cadastrar'}>Cadastrar</Link>
                </div>
            </nav>
            
        </header>
    )
}