import { useState, useEffect } from 'react'
import './Alimentos.css'
import FoodCard from '../components/FoodCard'
import { getFoods } from '../services/contentApi'

function Alimentos() {
  const [alimentos, setAlimentos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFoods()
      .then((data) => {
        setAlimentos(data)
      })
      .catch((error) => {
        console.error('Error cargando alimentos:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // Agrupar alimentos por categoría
  const categoriesMap = alimentos.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {})

  const categories = Object.keys(categoriesMap).map((categoryName) => ({
    title: categoryName,
    items: categoriesMap[categoryName],
  }))

  return (
    <main className="food">
      <header className="food__header">
        <h2 className="food__title">Alimentos</h2>
        <p className="food__subtitle">Combos listos para tu maraton de cine.</p>
      </header>
      {loading ? (
        <p>Cargando alimentos...</p>
      ) : (
        <div className="food__sections">
          {categories.map((category) => (
            <section className="food__group" key={category.title}>
              <h3 className="food__group-title">{category.title}</h3>
              <div className="food__grid">
                {category.items.map((item) => (
                  <FoodCard key={item.id} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  )
}

export default Alimentos
