import './Otros.css'
import OtherCard from '../components/OtherCard'

const otherItems = [
  {
    title: 'Promociones',
    tag: 'Ahorro',
    description: 'Combos y 2x1 en dias seleccionados para tu funcion.',
    detail: 'Consulta dias y salas participantes.',
  },
  {
    title: 'Membresias',
    tag: 'Beneficios',
    description: 'Acumula puntos por entradas, snacks y bebidas.',
    detail: 'Planes Plata, Oro y Familiar disponibles.',
  },
  {
    title: 'Preventas',
    tag: 'Estrenos',
    description: 'Compra tu asiento antes que nadie con acceso anticipado.',
    detail: 'Habilitado 48 horas antes del estreno.',
  },
  {
    title: 'Formatos especiales',
    tag: 'Experiencias',
    description: 'Salas 3D, IMAX y butacas premium para eventos.',
    detail: 'Funciones limitadas por sede.',
  },
]

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
