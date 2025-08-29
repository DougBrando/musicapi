import React from 'react';
import PageLayout from '../components/templates/PageLayout';
import InstrumentTable from '../components/organisms/InstrumentTable';

export default function TabelaPage(props) {
  const { 
    instrumentos, 
    carregando, 
    erro, 
    termoBusca, 
    onBuscaChange, 
    onOrdenacao, 
    ordenacao 
  } = props;

  const renderContent = () => {
    if (carregando) return <p>Carregando instrumentos...</p>;
    if (erro) return <p>Ocorreu um erro: {erro.message}</p>;
    
    // Mostra mensagem se a busca não retornar resultados
    if (instrumentos.length === 0 && termoBusca) {
      return <p>Nenhum instrumento encontrado para "{termoBusca}".</p>
    }

    return (
      <InstrumentTable 
        instrumentos={instrumentos} 
        onOrdenacao={onOrdenacao} 
        ordenacao={ordenacao} 
      />
    );
  };

  return (
    <PageLayout termoBusca={termoBusca} onBuscaChange={onBuscaChange}>
      {renderContent()}
    </PageLayout>
  );
}