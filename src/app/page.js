import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="HOME">
        <div className='BannerHome'>
          <h1>Descubra o Futuro da Saúde com Saúde 360°!</h1>
          <p>Na Saúde 360°, estamos revolucionando a maneira como você cuida da sua saúde. Utilizando tecnologia de realidade aumentada (RA), oferecemos: Espelho de Saúde Virtual, Experiências Interativas, Monitoramento Personalizado, Diagnóstico Instantâneo e Compartilhamento em Tempo Real </p>
          <div className='BotoesHome'>
            {/* <Link href={'/produto'} className='BotaoHome'>Ver produtos</Link> */}
            <Link href={'/sobrenos'} className='BotaoHome'>Saiba mais</Link>
          </div>
        </div>
        <div className='BeneficiosHome'>
          <div className='BeneficioHome'>
            <Image src={'/coracao.png'} alt='coracao' width={65} height={55}/>
            <h1>Vantagens</h1>
            <p>Abordagem proativa à saúde.</p>
            <p>Comunidade global focada na promoção da saúde.</p>
            <p>Experiência envolvente e personalizada.</p>
          </div>
          <div className='BeneficioHome'>
            <Image src={'/celular.png'} alt='celular' width={55} height={75}/>
            <h1>Integração Móvel</h1>
            <p>Notificações push para lembretes.</p>
            <p>Calendário integrado para eventos de saúde.</p>
            <p>Assistente virtual por voz.</p>
          </div>
          <div className='BeneficioHome'>
            <Image src={'/papel.png'} alt='papel' width={60} height={70}/>
            <h1>Lembretes Personalizados</h1>
            <p>Monitoramento contínuo via sensores wearables.</p>
            <p>Metas pessoais adaptáveis.</p>
            <p>Agenda de saúde personalizada..</p>
          </div>
        </div>
    </main>
  )
}
