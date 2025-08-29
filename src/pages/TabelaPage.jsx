import PageLayout from '../components/templates/PageLayout';
import InstrumentTable from '../components/organisms/InstrumentTable';
import { usePageTitle } from '../hooks/usePageTitle';

export default function TabelaPage({
  instrumentos,
  carregando,
  erro,
  termoBusca,
  onBuscaChange,
  onOrdenacao,
  ordenacao,
}) {
  usePageTitle('Tabela de Instrumentos');

  const renderContent = () => {
    if (carregando) return <p>Carregando instrumentos...</p>;
    if (erro) return <p>Ocorreu um erro: {erro.message}</p>;
    if (instrumentos.length === 0 && termoBusca) {
      return <p>Nenhum instrumento encontrado para "{termoBusca}".</p>;
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