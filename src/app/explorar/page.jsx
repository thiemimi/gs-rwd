
import Link from 'next/link';

export default function Explorar() {
  return (
    <>
      <h1>Explorar</h1>
      <h2>Categorias de Saúde</h2>


      <h3><Link href="/atividade">Atividade Física</Link></h3>

      <h3><Link href="/exames">Exames</Link></h3>

      <h3><Link href="/metas">Metas Pessoais</Link></h3>

      <h3><Link href="/nutricao">Nutrição</Link></h3>

      <h3><Link href="/sono">Sono</Link></h3>
    
    </>
  );
}
