import './Informativas.css'

function Terminos() {
  return (
    <main className="info-page">
      <header className="info-page__header">
        <h2 className="info-page__title">Terminos y condiciones</h2>
        <p className="info-page__subtitle">Condiciones de uso de servicios y contenido.</p>
      </header>

      <section className="info-page__content">
        <h3>Uso del servicio</h3>
        <p>El uso de la plataforma implica la aceptacion de nuestras politicas y reglas operativas.</p>
        <p>Los boletos y productos adquiridos estan sujetos a condiciones de cambios y cancelaciones.</p>
        <p>Los datos personales se gestionan conforme a los lineamientos de privacidad aplicables.</p>
      </section>
    </main>
  )
}

export default Terminos
