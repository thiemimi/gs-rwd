import Image from "next/image"
import Link from "next/link"

export default function Cabecalho(){

    return(
        <header className="cabecalho">
            <Image/>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/resumo'}>Resumo</Link>
                <Link href={'/explorar'}>Explorar</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/cadastrar'}>Cadastrar</Link>
            </nav>
            
        </header>
    )
}