import React from 'react';

export default function StatusIndicator({ ativo }) {

  const className = ativo ? 'status-ativo' : 'status-inativo';
  const texto = ativo ? 'Ativo' : 'Inativo';

  return (
    <span className={className}>
      {texto}
    </span>
  );
}