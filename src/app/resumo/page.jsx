'use client';

import { useState } from "react";

export default function Resumo(){

    const [listaMetas, setListaMetas] = useState([])
    const [metaInput, setMetaInput] = useState('')

    const adicionarMeta = () => {
        const novaMeta = {
            meta: metaInput
        };

        setListaMetas([...listaMetas, novaMeta]);
        atualizaTabelaMeta();
        limparInput();
    };
        
    const atualizaTabelaMeta = () => {
        let tbody = document.getElementById('meta');
        tbody.innerText = '';
            
        for(let i = 0;  i < listaMetas.length; i++){
            let tr = tbody.insertRow();
        
            let td_meta = tr.insertCell();
        
            td_meta.innerText = listaMetas[i].meta;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarMeta();
    };
        
    const limparInput = () => {
        setMetaInput('');
    }
        
    const deletarMeta = (index) => {
        const novasMetas = [...listaMetas];
        novasMetas.splice(index, 1);
        setListaMetas(novasMetas);
        atualizaTabelaMeta();
    };
    
    
    const [listaLembretes, setListaLembretes] = useState([])
    const [lembreteInput, setLembreteInput] = useState('')

    const adicionarLembrete = () => {
        const novoLembrete = {
            lembrete: lembreteInput
        };

        setListaLembretes([...listaLembretes, novoLembrete]);
        atualizaTabelaLembrete();
        limparInputLembrete();
    };
        
    const atualizaTabelaLembrete = () => {
        let tbody = document.getElementById('lembrete');
        tbody.innerText = '';
            
        for(let i = 0;  i < listaLembretes.length; i++){
            let tr = tbody.insertRow();
        
            let td_lembrete = tr.insertCell();
        
            td_lembrete.innerText = listaLembretes[i].lembrete;
        }
    }

    const handleSubmitt = (e) => {
        e.preventDefault();
        adicionarLembrete();
    };
        
    const limparInputLembrete = () => {
        setLembreteInput('');
    }
        
    const deletarLembrete = (index) => {
        const novosLembretes = [...listaLembretes];
        novosLembretes.splice(index, 1);
        setListaLembretes(novosLembretes);
        atualizaTabelaLembrete();
    };

    return(
        <main className="RESUMO">
            <div className="BlocosResumo">

                <div className="BlocoResumo">
                    <h1>Metas: </h1>
                    <div className="Nova">
                        <form action="#" method="get" onSubmit={handleSubmit}>
                            <input type="text" name="meta" id="meta" placeholder="Digite sua meta" value={metaInput} onChange={(e) => setMetaInput(e.target.value)} />
                            <button id="botaoMeta" type="submit">Adicionar</button>
                        </form>
                    </div>

                    <div className="Tabela">
                        <table border="1" id="tabelameta">
                          
                            <tbody id="meta">
                                {listaMetas.map((meta, index) => (
                                    <tr key={index}>
                                        <td>{meta.meta}</td>
                                        <td>
                                            <button onClick={() => deletarMeta(index)}>
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="BlocoResumo">

                    <h1>Lembretes: </h1>
                    <div className="Nova">
                        <form action="#" method="get" onSubmit={handleSubmitt}>

                            <input type="text" name="lembrete" id="lembrete" placeholder="Digite seu lembrete" value={lembreteInput} onChange={(e) => setLembreteInput(e.target.value)} />
                            <button id="botaoLembrete" type="submit">Adicionar</button>
                        </form>
                    </div>

                    <div className="Tabela">
                        <table border="1" id="tabelalembrete">

                            <tbody id="lembrete">
                                {listaLembretes.map((lembrete, index) => (
                                    <tr key={index}>
                                        <td>{lembrete.lembrete}</td>
                                        <td>
                                            <button onClick={() => deletarLembrete(index)}>
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="BlocoResumo">
                    <h1>Resumo das atividades cadastradas: </h1>
                </div>


            </div>
        </main>
    )
}