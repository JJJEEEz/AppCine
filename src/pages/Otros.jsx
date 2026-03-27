import './Otros.css'
import OtherCard from '../components/OtherCard'
import otherItems from '../data/otherItems'

function Otros() {
  return (
    <main className="food otros">
      <header className="food__header">
        <h2 className="food__title">Otros</h2>
        <p className="food__subtitle">
          Servicios extra para completar tu experiencia de cine.
        </p>
      </header>
      <section className="food__grid">
        {otherItems.map((item) => (
          <OtherCard key={item.title} {...item} />
        ))}
      </section>
    </main>
  )
}

export default Otros
