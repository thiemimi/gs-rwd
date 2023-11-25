"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Resumo = ({ userId }) => {

    const idU = sessionStorage.getItem("idUser");

    const rotaAtual = useRouter();

    const [ultimoRegistroSono, setUltimoRegistroSono] = useState(null);
    const [ultimoRegistroAtiviade, setultimoRegistroAtiviade] = useState([]);
    const [metas, setMetas] = useState([]);
    const [exames, setExames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseSono = await fetch(`http://localhost:8080/GSDDD/rest/resumo/sono/?id=${idU}`);
                const dataSono = await responseSono.json();
                setUltimoRegistroSono(dataSono);

                const responseAtividade = await fetch(`http://localhost:8080/GSDDD/rest/resumo/atividade/?id=${idU}`);
                const dataAtividade = await responseAtividade.json();
                setultimoRegistroAtiviade(dataAtividade);
                console.log(dataAtividade);

                const responseMetas = await fetch(`http://localhost:8080/GSDDD/rest/resumo/meta/?id=${idU}`);
                const dataMetas = await responseMetas.json();
                setMetas(dataMetas);
                console.log(dataMetas);

                const responseExames = await fetch(`http://localhost:8080/GSDDD/rest/resumo/exame/?id=${idU}`);
                if (responseExames.status === 200 && responseExames.headers.get('Content-Type').includes('application/json')) {
                    const dataExames = await responseExames.json();
                    setExames(dataExames);
                } else {
                    console.error('Erro ao buscar dados de Exames:', await responseExames.text());
                }

                
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, [idU]);


    function converterMinutosParaHoras(minutos) {
        const horas = Math.floor(minutos / 60);
        const minutosRestantes = minutos % 60;

        return `${horas}:${minutosRestantes < 10 ? '0' : ''}${minutosRestantes}`;
    }

    return (
        <main className="RESUMO">
            <div className="BlocosResumo">
                <div className="BlocoResumo">
                    <h1>Resumo das atividades cadastradas:</h1>
                </div>

                <div className="BlocoResumo">
                    <h2>Último registro de sono:</h2>
                    {ultimoRegistroSono ? (
                        <p>{`Duracao: ${converterMinutosParaHoras(ultimoRegistroSono.duracao)} h, Data: ${ultimoRegistroSono.dataSono}, Meta: ${converterMinutosParaHoras(ultimoRegistroSono.meta)} h`}</p>
                    ) : (
                        <p>Nenhum registro de sono encontrado. <Link href={`sono/?id=${idU}`}>Registre seu sono :)</Link></p>
                    )}
                </div>

                <div className="BlocoResumo">
                    <h2>Última atividade física cadastrada:</h2>
                    {ultimoRegistroAtiviade.length > 0 ? (

                        <p>{` ${ultimoRegistroAtiviade.tipo} , Data: ${ultimoRegistroAtiviade.dataAtiv}, Duração: ${converterMinutosParaHoras(ultimoRegistroAtiviade.duracao)} h`}</p>


                    ) : (
                        <p>Nenhum registro de atividade física encontrado. <Link href={`atividade/?id=${idU}`}>Registre suas atividades físicas :)</Link></p>
                    )}
                </div>



                <div className="BlocoResumo">
                    <h2>Metas:</h2>
                    {metas.length > 0 ? (
                        <ul>
                            {metas.map((meta, index) => (
                                <div key={index} className='MetaRegistrada'>
                                    <span>{meta.mensagem}</span>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhuma meta encontrada.<Link href={`metas/?id=${idU}`}>Registre suas metas :)</Link></p>
                    )}
                </div>


                <div className="BlocoResumo">
                    <h2>Exames:</h2>
                    {exames.length > 0 ? (
                        <ul>
                            {exames.map((exame, index) => (
                                <li key={index} className='RegistroExame'>
                                    {exame.nomeExame} - Data: {exame.dataExame}, Horário: {exame.horarioExame}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum exame encontrado.</p>
                    )}
                </div>

             </div>
        </main>
    );
};

export default Resumo;