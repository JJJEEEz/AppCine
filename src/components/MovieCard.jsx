import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ title, image, detailPath }) {
  return (
    <article className="movie-card">
      {image ? (
        <img className="movie-card__image" src={image} alt={title} />
      ) : null}
      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>
        <Link className="button button--primary" to={detailPath}>
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default MovieCard
