import './Header.css'

function Header({ title = 'CINEpolitoZ', cambiarVista }) {
	return (
		<header className="site-header">
			<div className="site-header__inner">
				<h1 className="site-header__title">{title}</h1>
				<nav className="site-header__nav">
					<button
						className="site-header__link"
						type="button"
						onClick={() => cambiarVista?.('home')}
					>
						Inicio
					</button>
					<button
						className="site-header__link"
						type="button"
						onClick={() => cambiarVista?.('cartelera')}
					>
						Cartelera
					</button>
					<button
						className="site-header__link"
						type="button"
						onClick={() => cambiarVista?.('alimentos')}
					>
						Alimentos
					</button>
					<button
						className="site-header__link"
						type="button"
						onClick={() => cambiarVista?.('otros')}
					>
						Otros
					</button>
				</nav>
			</div>
		</header>
	)
}

export default Header
