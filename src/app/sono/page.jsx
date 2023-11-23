'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Componente funcional Sono
const Sono = () => {
  // Estados locais
  const [metaSono, setMetaSono] = useState('');
  const [ultimoRegistroSono, setUltimoRegistroSono] = useState('');

  // Função para registrar a meta de sono
  const handleRegistrarMetaSono = () => {
    // Lógica para registrar a meta de sono
    // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
    setMetaSono('');
  };

  // Função para registrar o último registro de sono
  const handleRegistrarUltimoSono = () => {
    // Lógica para registrar o último registro de sono
    // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
    console.log('Último Registro de Sono Registrado:', ultimoRegistroSono);
  };

  // Renderização do componente
  return (
    <div>
      <h1>Sono</h1>

      {/* Formulário para registrar meta de sono */}
      <form>
        <label>Meta:</label>
        <input type="text" value={metaSono} onChange={(e) => setMetaSono(e.target.value)} />
        <button type="button" onClick={handleRegistrarMetaSono}>
          Registrar
        </button>
      </form>

      {/* Formulário para registrar último sono */}
      <form>
        <label>Adicionar tempo de sono:</label>
        <input type="text" value={ultimoRegistroSono} onChange={(e) => setUltimoRegistroSono(e.target.value)} />
        <button type="button" onClick={handleRegistrarUltimoSono}>
          Registrar
        </button>
      </form>

      {/* Exibir a "Meta de Sono" */}
      <div>
        <h2>Meta</h2>
        <p>{metaSono && `${metaSono}h`}</p>
      </div>

      {/* Exibir o último registro de sono */}
      <div>
        <h2>Último Registro</h2>
        <p>{ultimoRegistroSono && `${ultimoRegistroSono}h`}</p>
      </div>

      <h1>Sobre o sono</h1>
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

      {/* Botão para voltar para Explorar */}
      <Link href="/explorar">Voltar</Link>
    </div>
  );
};

export default Sono;