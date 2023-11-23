'use client'

import React, { useState } from 'react';
import Link from 'next/link';


const Sono = () => {
 
  const [metaSono, setMetaSono] = useState('');
  const [ultimoRegistroSono, setUltimoRegistroSono] = useState('');

 
  const handleRegistrarMetaSono = () => {
    
    setMetaSono('');
  };

 
  const handleRegistrarUltimoSono = () => {
    
    console.log('Último Registro de Sono Registrado:', ultimoRegistroSono);
  };

  
  return (
    <div className='SONO'>
      <Link href="/explorar" className='BotaoVoltar'>Voltar</Link>
      <h1>Sono</h1>

    <div className="FormSono">
      <form>
        <label>Meta:</label>
        <input type="text" value={metaSono} onChange={(e) => setMetaSono(e.target.value)} />
        <button type="button" onClick={handleRegistrarMetaSono}>
          Registrar
        </button>
      </form>

      
      <form>
        <label>Adicionar tempo de sono:</label>
        <input type="text" value={ultimoRegistroSono} onChange={(e) => setUltimoRegistroSono(e.target.value)} />
        <button type="button" onClick={handleRegistrarUltimoSono}>
          Registrar
        </button>
      </form>
    </div>

     
      <div className='MetaSono'>
        <h2>Meta</h2>
        <p>{metaSono && `${metaSono}h`}</p>
      </div>

      
      <div className='RegistroSono'>
        <h2>Último Registro</h2>
        <p>{ultimoRegistroSono && `${ultimoRegistroSono}h`}</p>
      </div>

      <div className="SobreSono">
        <h2>Sobre o sono</h2>
        <p>
          O recurso Sono fornece informações sobre
          seus hábitos. Monitores de sono podem ajudar
          a determinar a quantidade de tempo que você
          passa na cama e dormindo. Estes dispositivos
          estimam seu tempo na cama e seu tempo
          dormindo ao analisar mudanças na atividade
          física, incluindo o movimento durante a noite.
          Você também pode acompanhar o seu sono
          digitando manualmente sua própria estimativa
          da hora em que foi dormir e por quanto tempo.
        </p>

        <p>
          O período "Na Cama" reflete o tempo que você
          passa deitado na cama com a intenção de
          dormir. Para a maioria das pessoas, isso
          começa quando você apaga as luzes e termina
          quando você sai da cama. O período
          "Dormindo" reflete o tempo que você passa
          dormindo.
        </p>
      </div>
    </div>
  );
};

export default Sono;