import React from 'react';
import StatusIndicator from '../atoms/StatusIndicator';
import { formatCurrency } from '../../utils/formatters';

export default function InstrumentTable({ instrumentos = [], onOrdenacao, ordenacao }) {
  const getSetaOrdenacao = (chave) => {
    if (!ordenacao || ordenacao.chave !== chave) return '↕️';
    return ordenacao.direcao === 'ascendente' ? '🔼' : '🔽';
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onOrdenacao('nome')} style={{ cursor: 'pointer' }}>Nome {getSetaOrdenacao('nome')}</th>
          <th onClick={() => onOrdenacao('tipo')} style={{ cursor: 'pointer' }}>Tipo {getSetaOrdenacao('tipo')}</th>
          <th onClick={() => onOrdenacao('marca')} style={{ cursor: 'pointer' }}>Marca {getSetaOrdenacao('marca')}</th>
          <th>Voltagem</th>
          <th onClick={() => onOrdenacao('ano')} style={{ cursor: 'pointer' }}>Ano {getSetaOrdenacao('ano')}</th>
          <th onClick={() => onOrdenacao('preco')} style={{ cursor: 'pointer' }}>Preço {getSetaOrdenacao('preco')}</th>
          <th>Peso (kg)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {instrumentos.map((instrumento) => (
          <tr key={instrumento._id}>
            <td>{instrumento.nome}</td>
            <td>{instrumento.tipo}</td>
            <td>{instrumento.marca}</td>
            <td>{instrumento.voltagem}</td>
            <td>{instrumento.ano}</td>
            <td>{formatCurrency(instrumento.preco)}</td>
            <td>{instrumento.peso_kg}</td>
            <td>
              <StatusIndicator ativo={instrumento.ativo} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}