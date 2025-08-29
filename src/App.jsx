import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useGetInstruments } from './hooks/useGetInstruments';

import './App.css';

import TabelaPage from './pages/TabelaPage';
import CardsPage from './pages/CardsPage';

function App() {
  const { instrumentos, carregando, erro } = useGetInstruments();
  const [termoBusca, setTermoBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState({ chave: 'nome', direcao: 'ascendente' });

  const instrumentosExibidos = useMemo(() => {
    let instrumentosFiltrados = [...instrumentos];
    
    if (termoBusca) {
      instrumentosFiltrados = instrumentosFiltrados.filter(inst =>
        inst.nome.toLowerCase().includes(termoBusca.toLowerCase())
      );
    }

    if (ordenacao.chave) {
      instrumentosFiltrados.sort((a, b) => {
        if (a[ordenacao.chave] < b[ordenacao.chave]) {
          return ordenacao.direcao === 'ascendente' ? -1 : 1;
        }
        if (a[ordenacao.chave] > b[ordenacao.chave]) {
          return ordenacao.direcao === 'ascendente' ? 1 : -1;
        }
        return 0;
      });
    }
    return instrumentosFiltrados;
  }, [instrumentos, termoBusca, ordenacao]);

  const handleBuscaChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const handleOrdenacao = (chave) => {
    setOrdenacao(ordemAtual => ({
      chave,
      direcao: ordemAtual.chave === chave && ordemAtual.direcao === 'ascendente' ? 'descendente' : 'ascendente'
    }));
  };

  return (
      <Routes>
        <Route
          path="/"
          element={
            <TabelaPage
              instrumentos={instrumentosExibidos}
              carregando={carregando}
              erro={erro}
              termoBusca={termoBusca}
              onBuscaChange={handleBuscaChange}
              onOrdenacao={handleOrdenacao}
              ordenacao={ordenacao}
            />
          }
        />
        <Route
          path="/card"
          element={
            <CardsPage
              instrumentos={instrumentosExibidos}
              carregando={carregando}
              erro={erro}
              termoBusca={termoBusca}
              onBuscaChange={handleBuscaChange}
            />
          }
        />
      </Routes>
  );
}

export default App;