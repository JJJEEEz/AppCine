import './OtherCard.css'
import Button from './Button'

function OtherCard({ title, description, detail, tag, onVerMas }) {
  return (
    <article className="other-card">
      <header className="other-card__header">
        {tag ? <span className="other-card__tag">{tag}</span> : null}
        <h3 className="other-card__title">{title}</h3>
      </header>
      <p className="other-card__description">{description}</p>
      {detail ? <p className="other-card__detail">{detail}</p> : null}
      <Button text="Ver mas" variant="ghost" onClick={onVerMas} />
    </article>
  )
}

export default OtherCard
