import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './MovieCarousel.css'

function MovieCarousel({ movies = [] }) {
  if (!movies.length) {
    return <p className="home-carousel__loading">Cargando estrenos...</p>
  }

  return (
    <div className="home-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={movies.length > 1}
        slidesPerView={1}
        spaceBetween={14}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <article className="home-carousel__slide">
              <img
                className="home-carousel__image"
                src={movie.image}
                alt={movie.title}
              />
              <div className="home-carousel__overlay">
                <p className="home-carousel__tag">Estreno destacado</p>
                <h3 className="home-carousel__title">{movie.title}</h3>
                <p className="home-carousel__text">
                  {movie.synopsis || 'Descubre esta pelicula en cartelera.'}
                </p>
                <Link className="button button--primary" to={`/detalle/${movie.id}`}>
                  Ver detalle
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCarousel