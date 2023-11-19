import Image from "next/image"
import Link from "next/link"

export default function Cabecalho(){

    return(
        <header className="Cabecalho">
            
            <nav>
                <div className="Logo">
                    <Image src={'/logo.png'} alt='logo' width={70} height={65}/>
                </div>
                <div className="Menu">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/resumo'}>Resumo</Link>
                    <Link href={'/explorar'}>Explorar</Link>
                    <Link href={'/sobrenos'}> Sobre Nos</Link>
                </div>
                <div className="LogarCadastrar">
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/cadastrar'}>Cadastrar</Link>
                </div>
            </nav>
            
        </header>
    )
}