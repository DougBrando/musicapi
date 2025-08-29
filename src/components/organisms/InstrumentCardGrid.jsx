import StatusIndicator from '../atoms/StatusIndicator';

export default function InstrumentCardGrid({ instrumentos = [] }) {
  return (
    <div className="cards">
      {instrumentos.map((instrumento) => (
        <div className="card" key={instrumento._id}>
          <h3>{instrumento.nome}</h3>
          <ul>
            <li>
              <strong>Tipo:</strong> {instrumento.tipo}
            </li>
            <li>
              <strong>Marca:</strong> {instrumento.marca}
            </li>
            <li>
              <strong>Voltagem:</strong> {instrumento.voltagem}
            </li>
            <li>
              <strong>Ano:</strong> {instrumento.ano}
            </li>
            <li>
              <strong>Preço:</strong> {instrumento.preco}
            </li>
            <li>
              <strong>Peso (kg):</strong> {instrumento.peso_kg}
            </li>
            <li>
              <strong>Status:</strong>
              <StatusIndicator ativo={instrumento.ativo} />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}