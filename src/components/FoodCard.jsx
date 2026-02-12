import './FoodCard.css'
import Button from './Button'

function FoodCard({ name, price, image, onComprar }) {
  return (
    <article className="food-card">
      <img className="food-card__image" src={image} alt={name} />
      <div className="food-card__content">
        <h3 className="food-card__title">{name}</h3>
        <p className="food-card__price">{price}</p>
        <Button text="Comprar" variant="accent" onClick={onComprar} />
      </div>
    </article>
  )
}

export default FoodCard
