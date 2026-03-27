import { useState, useEffect } from 'react'
import './Home.css'
import MovieCard from '../components/MovieCard'
import MovieCarousel from '../components/MovieCarousel'
import { getMoviesBySection, getNews } from '../services/contentApi'

function Home() {
	const [movies, setMovies] = useState([])
	const [moviesLoading, setMoviesLoading] = useState(true)
	const [noticias, setNoticias] = useState([])
	const [newsLoading, setNewsLoading] = useState(true)

	useEffect(() => {
		let isMounted = true

		getMoviesBySection('home')
			.then((data) => {
				if (isMounted) {
					setMovies(data)
				}
			})
			.catch((error) => {
				console.error('Error cargando películas:', error)
			})
			.finally(() => {
				if (isMounted) {
					setMoviesLoading(false)
				}
			})

		getNews(5)
			.then((data) => {
				if (isMounted) {
					setNoticias(data)
				}
			})
			.catch((error) => {
				console.error('Error al cargar noticias:', error)
			})
			.finally(() => {
				if (isMounted) {
					setNewsLoading(false)
				}
			})

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<main className="food">
			<header className="food__header">
				<h2 className="food__title">Inicio</h2>
				<p className="food__subtitle">Películas destacadas para ti</p>
			</header>

			<section className="home-section">
				<h3 className="home-section__title">Estrenos</h3>
				<MovieCarousel movies={movies} />
			</section>

			<section className="home-section">
				<h3 className="home-section__title">Recomendadas</h3>
			<section className="food__grid">
				{moviesLoading ? (
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
			</section>

			{/* Sección de Noticias del Cine */}
			<section className="news-section">
				<header className="food__header">
					<h2 className="food__title">Noticias del Cine</h2>
					<p className="food__subtitle">Últimas novedades del mundo cinematográfico</p>
				</header>
				
				{newsLoading ? (
					<p className="news-section__loading">Cargando noticias...</p>
				) : (
					<div className="news-section__grid">
						{noticias.map((noticia) => (
							<article key={noticia.id} className="news-card">
								<div className="news-card__content">
									<h3 className="news-card__title">{noticia.title}</h3>
									<p className="news-card__body">{noticia.body}</p>
								</div>
							</article>
						))}
					</div>
				)}
			</section>

		</main>
	)
}

export default Home
