"use client"

import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Explorar({ userId }) {

  const idUser = sessionStorage.getItem("idUser");

  const rotaAtual = useRouter();

  return (
    <main className='EXPLORAR'>
        <div className="TituloExplorar">
            <h1>Explorar</h1>
            <h2>Categorias de Saúde</h2>
        </div>

        <div className="LinksExplorar">
            <Link href={`/atividade/?id=${idUser}`}>Atividade Física</Link>
            
            <Link href={`/exames/?id=${idUser}`}>Exames</Link>

            <Link href={`/metas/?id=${idUser}`}>Metas Pessoais</Link>

            <Link href={`/nutricao/?id=${idUser}`}>Nutrição</Link>

            <Link href={`/sono/?id=${idUser}`}>Sono</Link>
        </div>
    
    </main>
  );
}
