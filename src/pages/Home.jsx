import './Home.css'
import MovieCard from '../components/MovieCard'

const movies = [
	{
		title: 'Avatar: Fuego y Cenizas',
		image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
	},
	{
		title: 'Ayuda',
		image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80',
	},
	{
		title: 'Arc',
		image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
	},
]

function Home({ cambiarVista }) {
	return (
		<main className="food">
			<header className="food__header">
				<h2 className="food__title">Inicio</h2>
				<p className="food__subtitle">Películas destacadas para ti</p>
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

export default Home
