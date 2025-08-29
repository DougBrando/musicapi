import PageLayout from '../components/templates/PageLayout';
import InstrumentCardGrid from '../components/organisms/InstrumentCardGrid';

export default function CardsPage(props) {
  const { 
    instrumentos, 
    carregando, 
    erro, 
    termoBusca, 
    onBuscaChange 
  } = props;

  const renderContent = () => {
    if (carregando) return <p>Carregando instrumentos...</p>;
    if (erro) return <p>Ocorreu um erro: {erro.message}</p>;

    // Mostra mensagem se a busca não retornar resultados
    if (instrumentos.length === 0 && termoBusca) {
      return <p>Nenhum instrumento encontrado para "{termoBusca}".</p>
    }
    
    return <InstrumentCardGrid instrumentos={instrumentos} />;
  };

  return (
    <PageLayout termoBusca={termoBusca} onBuscaChange={onBuscaChange}>
      {renderContent()}
    </PageLayout>
  );
}