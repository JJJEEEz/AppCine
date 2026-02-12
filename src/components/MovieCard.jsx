import './MovieCard.css'
import Button from './Button'

function MovieCard({ title, image, onVerDetalle }) {
  return (
    <article className="movie-card">
      {image ? (
        <img className="movie-card__image" src={image} alt={title} />
      ) : null}
      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </article>
  )
}

export default MovieCard
