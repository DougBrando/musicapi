import React from 'react';
import NavigationBar from '../molecules/NavigationBar';

export default function PageLayout({ children, termoBusca, onBuscaChange }) {
  return (
    <main>
      <NavigationBar />
      <h1>Lista de Instrumentos</h1>

      <div className="search-container" style={{ margin: '20px 0', width: '100%' }}>
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={termoBusca}
          onChange={onBuscaChange}
          style={{ width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>
      
      <div className="page-content">
        {children}
      </div>
    </main>
  );
}