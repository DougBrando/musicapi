import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './pages/Cards'
import Tabela from './pages/Tabela'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/tabela" element={<Tabela />} />
    </Routes>
     
    </>
  )
}

export default App
