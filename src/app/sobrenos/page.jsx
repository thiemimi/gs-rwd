import Image from "next/image"

export default function Sobrenos(){

    return(
        <main className="SOBRENOS">
            <div className="ContainerSobreNos">
                <div className="TituloSobrenos">
                    <h1>SOBRE NÓS</h1>
                    <h2>SAÚDE 360°</h2>
                </div>
                <div className="ConteudoSobreNos">  
                    <p>A Saúde 360° é uma solução revolucionária que utiliza realidade aumentada (RA) para prevenção de doenças. Seus principais componentes incluem um Espelho de Saúde Virtual que destaca áreas de atenção, experiências interativas de prevenção, monitoramento personalizado por sensores wearables, diagnóstico instantâneo por escaneamento de RA, e compartilhamento de experiências em tempo real.</p>
                    <p>A estratégia alinha-se com as Metas de Desenvolvimento Sustentável (ODS) da ONU, focando na redução da mortalidade materna e infantil, controle de doenças transmissíveis, prevenção de doenças não transmissíveis e melhoria geral da saúde. A Saúde 360° oferece benefícios como uma abordagem proativa à saúde, comunidade global virtual e conscientização ativa. Lembretes personalizados são integrados, utilizando dados contínuos, metas pessoais, agenda de saúde e inteligência artificial. A integração móvel é realizada por meio de notificações push, calendário integrado, assistente virtual por voz, widgets na tela inicial, chatbot de saúde e gamificação.</p>
                </div>
            </div>
            <div className="Componentes">
                <h1>PRINCIPAIS COMPONENTES</h1>
                <div className="Componente">
                <div className="TextoImagemSobreNos">   
                    <Image src={'/espelho.png'} alt='espelho' width={120} height={160} className="ImagemSobreNos"/>
                    <h2>1.Espelho de Saúde Virtual:</h2>
                </div>
                    <p> O Espelho de Saúde Virtual utiliza tecnologia avançada de captura de imagem e realidade aumentada para criar uma representação digital precisa do corpo do usuário. Ele destaca áreas específicas que exigem atenção, como sistemas cardiovascular, respiratório, nervoso, entre outros. </p>
                </div>
                <div className="Componente">
                    <p> Módulos interativos incluem experiências como simulações de exercícios personalizados, jogos educativos para aprender sobre alimentação saudável e práticas de mindfulness, e cenários virtuais que destacam os benefícios de hábitos saudáveis. </p>
                    <div className="TextoImagemSobreNos">
                        <Image src={'/homemcoracao.png'} alt='homem com desenho de coração na cabeça' width={130} height={140} className="ImagemSobreNos"/>
                        <h2>2.Experiências Interativas de Prevenção:</h2>
                    </div>
                </div>
                <div className="Componente">
                <div className="TextoImagemSobreNos">
                    <Image src={'/coracaosinais.png'} alt='coraçao com sinais vitais' width={140} height={120} className="ImagemSobreNos"/>
                    <h2>3.Monitoramento Personalizado:</h2>
                </div>
                    <p> Sensores wearables conectados à plataforma Saúde 360° monitoram constantemente dados vitais, atividades físicas e padrões de sono. Essas informações são integradas à experiência de realidade aumentada para fornecer feedback instantâneo e sugestões personalizadas.</p>
                </div>
                <div className="Componente">
                    <p> A funcionalidade de diagnóstico utiliza tecnologia de escaneamento por RA para analisar detalhes específicos do corpo. Isso inclui a detecção precoce de alterações em tecidos, órgãos ou sistemas que podem indicar riscos potenciais à saúde.</p>
                    <div className="TextoImagemSobreNos">
                        <Image src={'/ficha.png'} alt='ficha médica' width={130} height={100}
                        className="ImagemSobreNos"/>
                        <h2>4.Diagnóstico Instantâneo:</h2>
                    </div>
                </div>
                <div className="Componente">
                    <div className="TextoImagemSobreNos">
                        <Image src={'/livromedico.png'} alt='livro' width={140} height={150} className="ImagemSobreNos"/>
                        <h2>5.Compartilhamento de Experiências em Tempo Real:</h2>
                    </div>
                    <p> Os usuários podem compartilhar suas experiências e conquistas com a comunidade Saúde 360° em tempo real. Isso cria uma rede de apoio virtual, incentivando hábitos saudáveis e fornecendo suporte mútuo.</p>
                </div>
            </div>
        </main>
    )
}