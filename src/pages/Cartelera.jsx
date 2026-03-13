import { useState, useEffect } from 'react'
import './Cartelera.css'
import MovieCard from '../components/MovieCard'

function Cartelera() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/movies.json')
      .then((response) => response.json())
      .then((data) => {
        const carteleraMovies = data.filter((movie) => movie.section === 'cartelera')
        setMovies(carteleraMovies)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error cargando películas:', error)
        setLoading(false)
      })
  }, [])

  return (
    <main className="food">
      <header className="food__header">
        <h2 className="food__title">Cartelera</h2>
        <p className="food__subtitle">Estrenos y funciones de hoy</p>
      </header>
      <section className="food__grid">
        {loading ? (
          <p>Cargando películas...</p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              detailPath={`/detalle/${movie.id}`}
            />
          ))
        )}
      </section>
    </main>
  )
}

export default Cartelera
