import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <section className="site-footer__section">
          <h3 className="site-footer__title">Modulos</h3>
          <ul className="site-footer__list">
            <li>
              <Link to="/cartelera">Cartelera</Link>
            </li>
            <li>
              <Link to="/alimentos">Alimentos</Link>
            </li>
            <li>
              <Link to="/otros">Otros</Link>
            </li>
          </ul>
        </section>
        <section className="site-footer__section">
          <h3 className="site-footer__title">Politicas</h3>
          <ul className="site-footer__list">
            <li>
              <Link to="/politicas">Politicas</Link>
            </li>
            <li>
              <Link to="/vision">Vision</Link>
            </li>
            <li>
              <Link to="/mision">Mision</Link>
            </li>
            <li>
              <Link to="/terminos">Terminos y condiciones</Link>
            </li>
          </ul>
        </section>
        <section className="site-footer__section">
          <h3 className="site-footer__title">Contacto</h3>
          <p>Atencion a clientes</p>
          <p>T. 552 122 6060</p>
          <p>aac@atencioncinepolis.com</p>
          <p>@AyudaCinepolis</p>
          <p>Dejanos tus comentarios</p>
          <p>Facturacion electronica</p>
        </section>
      </div>
      <p className="site-footer__copy">CINEpolitoZ - Actividad de clase 2026</p>
    </footer>
  )
}

export default Footer