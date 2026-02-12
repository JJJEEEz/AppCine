import './Cartelera.css'
import MovieCard from '../components/MovieCard'

const movies = [
  {
    title: 'Shingeki No Kyojin: The Final Season',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bob Esponja: Al Rescate',
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Vigilante de la Noche',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Luz de Octubre',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80',
  },
]

function Cartelera({ cambiarVista }) {
  return (
    <main className="food">
      <header className="food__header">
        <h2 className="food__title">Cartelera</h2>
        <p className="food__subtitle">Estrenos y funciones de hoy</p>
      </header>
      <section className="food__grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            image={movie.image}
            onVerDetalle={() => cambiarVista?.('detalle')}
          />
        ))}
      </section>
    </main>
  )
}

export default Cartelera
