import { Routes, Route } from 'react-router-dom';
import TabelaPage from './pages/TabelaPage';
import CardsPage from './pages/CardsPage';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<TabelaPage />} />
      <Route path="/card" element={<CardsPage />} />
    </Routes>
  );
}

export default App;