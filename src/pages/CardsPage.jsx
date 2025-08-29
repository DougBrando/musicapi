import React from 'react';
import { useGetInstruments } from '../hooks/useGetInstruments';
import PageLayout from '../components/templates/PageLayout';
import InstrumentCardGrid from '../components/organisms/InstrumentCardGrid';

export default function CardsPage() {
  const { instrumentos, carregando, erro } = useGetInstruments();

  const renderContent = () => {
    if (carregando) {
      return <p>Carregando instrumentos...</p>;
    }
    if (erro) {
      return <p>Ocorreu um erro ao buscar os dados: {erro.message}</p>;
    }
    return <InstrumentCardGrid instrumentos={instrumentos} />;
  };

  return (
    <PageLayout>
      {renderContent()}
    </PageLayout>
  );
}