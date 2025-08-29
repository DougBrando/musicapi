import React from 'react';
import StatusIndicator from '../atoms/StatusIndicator';

export default function InstrumentTable({ instrumentos = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Voltagem</th>
          <th>Ano</th>
          <th>Preço</th>
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
            <td>{instrumento.preco}</td>
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