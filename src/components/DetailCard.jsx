import './Detail.css'

const fallbackImage =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80'

function DetailCard({
  title = 'Nombre de la pelicula',
  image = fallbackImage,
  synopsis = 'Aqui va una sinopsis de la pelicula.',
}) {
  return (
    <main className="detail">
      <h2 className="detail__title">Como llegue aqui?</h2>
      <img className="detail__image" src={image} alt={title} />
      <p className="detail__synopsis">{synopsis}</p>
    </main>
  )
}

export default DetailCard
