import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Detail from './pages/Detail'
import Alimentos from './pages/Alimentos'
import Otros from './pages/Otros'

function App() {
  const [vistaActual, setVistaActual] = useState('home')
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  const verDetalle = (pelicula) => {
    setPeliculaSeleccionada(pelicula)
    setVistaActual('detalle')
  }

  return (
    <div className="page">
      <Header cambiarVista={setVistaActual} />
      {vistaActual === 'home' && <Home cambiarVista={setVistaActual} verDetalle={verDetalle} />}
      {vistaActual === 'cartelera' && <Cartelera cambiarVista={setVistaActual} verDetalle={verDetalle} />}
      {vistaActual === 'alimentos' && <Alimentos />}
      {vistaActual === 'otros' && <Otros />}
      {vistaActual === 'detalle' && <Detail peliculaSeleccionada={peliculaSeleccionada} />}
    </div>
  )
}

export default App
