import { NavLink } from 'react-router-dom'
import './Header.css'

function Header({ title = 'CINEpolitoZ' }) {
	return (
		<header className="site-header">
			<div className="site-header__inner">
				<h1 className="site-header__title">{title}</h1>
				<nav className="site-header__nav">
					<NavLink className="site-header__link" to="/" end>
						Inicio
					</NavLink>
					<NavLink className="site-header__link" to="/cartelera">
						Cartelera
					</NavLink>
					<NavLink className="site-header__link" to="/alimentos">
						Alimentos
					</NavLink>
					<NavLink className="site-header__link" to="/otros">
						Otros
					</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
