import { useState, useEffect } from 'react'
import './Cartelera.css'
import MovieCard from '../components/MovieCard'
import { getMoviesBySection } from '../services/contentApi'

function Cartelera() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMoviesBySection('cartelera')
      .then((data) => {
        setMovies(data)
      })
      .catch((error) => {
        console.error('Error cargando películas:', error)
      })
      .finally(() => {
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
