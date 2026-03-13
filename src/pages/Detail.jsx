import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../components/Detail.css'
import Button from '../components/Button'

const fallbackImage =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80'

function Detail() {
  const { id } = useParams()
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
  const [loading, setLoading] = useState(true)
  const [nombreUsuario, setNombreUsuario] = useState('')
  const [cantidadBoletos, setCantidadBoletos] = useState('')
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('')

  useEffect(() => {
    fetch('/movies.json')
      .then((response) => response.json())
      .then((data) => {
        const movie = data.find((item) => String(item.id) === String(id))
        setPeliculaSeleccionada(movie || null)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error cargando detalle de película:', error)
        setLoading(false)
      })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombreUsuario && cantidadBoletos) {
      const titulo = peliculaSeleccionada?.title || 'esta película'
      setMensajeConfirmacion(
        `¡Gracias ${nombreUsuario}! Has comprado ${cantidadBoletos} boletos para ${titulo}`
      )
      // Limpiar el formulario después de la compra
      setNombreUsuario('')
      setCantidadBoletos('')
    }
  }

  if (loading) {
    return (
      <main className="detail">
        <p>Cargando detalle...</p>
      </main>
    )
  }

  if (!peliculaSeleccionada) {
    return (
      <main className="detail">
        <h2 className="detail__title">Película no encontrada</h2>
        <p className="detail__synopsis">Verifica la cartelera e intenta de nuevo.</p>
      </main>
    )
  }

  return (
    <main className="detail">
      <h2 className="detail__title">
        {peliculaSeleccionada?.title || 'Nombre de la película'}
      </h2>
      <img
        className="detail__image"
        src={peliculaSeleccionada?.image || fallbackImage}
        alt={peliculaSeleccionada?.title || 'Película'}
      />
      <p className="detail__synopsis">
        {peliculaSeleccionada?.synopsis || 'Aquí va una sinopsis de la película.'}
      </p>

      <form onSubmit={handleSubmit} className="detail__form">
        <h3 className="detail__form-title">Comprar Boletos</h3>
        
        <div className="detail__form-group">
          <label htmlFor="nombre" className="detail__label">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            className="detail__input"
            required
          />
        </div>

        <div className="detail__form-group">
          <label htmlFor="cantidad" className="detail__label">
            Cantidad de boletos:
          </label>
          <input
            type="number"
            id="cantidad"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            min="1"
            className="detail__input"
            required
          />
        </div>

        <Button text="Comprar boletos" type="submit" variant="primary" />
      </form>

      {mensajeConfirmacion && (
        <div className="detail__confirmation">
          {mensajeConfirmacion}
        </div>
      )}
    </main>
  )
}

export default Detail
