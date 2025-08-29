import PageLayout from '../components/templates/PageLayout';
import InstrumentCardGrid from '../components/organisms/InstrumentCardGrid';
import { usePageTitle } from '../hooks/usePageTitle';

export default function CardsPage({
  instrumentos,
  carregando,
  erro,
  termoBusca,
  onBuscaChange,
}) {
  usePageTitle('Cards de Instrumentos');

  const renderContent = () => {
    if (carregando) return <p>Carregando instrumentos...</p>;
    if (erro) return <p>Ocorreu um erro: {erro.message}</p>;
    if (instrumentos.length === 0 && termoBusca) {
      return <p>Nenhum instrumento encontrado para "{termoBusca}".</p>;
    }
    return <InstrumentCardGrid instrumentos={instrumentos} />;
  };

  return (
    <PageLayout termoBusca={termoBusca} onBuscaChange={onBuscaChange}>
      {renderContent()}
    </PageLayout>
  );
}