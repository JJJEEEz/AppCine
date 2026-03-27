import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Cartelera = lazy(() => import('../pages/Cartelera'))
const Detail = lazy(() => import('../pages/Detail'))
const Alimentos = lazy(() => import('../pages/Alimentos'))
const Otros = lazy(() => import('../pages/Otros'))
const Politicas = lazy(() => import('../pages/Politicas'))
const Vision = lazy(() => import('../pages/Vision'))
const Mision = lazy(() => import('../pages/Mision'))
const Terminos = lazy(() => import('../pages/Terminos'))

function AppRoutes() {
  return (
    <Suspense fallback={<main className="route-loading">Cargando seccion...</main>}>
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
    </Suspense>
  )
}

export default AppRoutes
