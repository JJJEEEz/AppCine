import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Detail from './pages/Detail'
import Alimentos from './pages/Alimentos'
import Otros from './pages/Otros'
import Politicas from './pages/Politicas'
import Vision from './pages/Vision'
import Mision from './pages/Mision'
import Terminos from './pages/Terminos'

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
