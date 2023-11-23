
import Link from 'next/link';

export default function Explorar() {
  return (
    <main className='EXPLORAR'>
        <div className="TituloExplorar">
            <h1>Explorar</h1>
            <h2>Categorias de Saúde</h2>
        </div>

        <div className="LinksExplorar">
            <Link href="/atividade">Atividade Física</Link>
            
            <Link href="/exames">Exames</Link>

            <Link href="/metas">Metas Pessoais</Link>

            <Link href="/nutricao">Nutrição</Link>

            <Link href="/sono">Sono</Link>
        </div>
    
    </main>
  );
}
