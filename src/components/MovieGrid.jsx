import './MovieGrid.css'
import MovieCard from './MovieCard'

function MovieGrid({ items }) {
  return (
    <section className="cards" aria-label="Cartelera">
      {items.map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </section>
  )
}

export default MovieGrid
