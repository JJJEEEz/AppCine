import './Alimentos.css'
import FoodCard from '../components/FoodCard'

const categories = [
  {
    title: 'Bebidas',
    items: [
      {
        name: 'Soda grande',
        price: '$3.20',
        image:
          'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Agua mineral',
        price: '$2.10',
        image:
          'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    title: 'Comestibles',
    items: [
      {
        name: 'Hot dog',
        price: '$3.90',
        image:
          'https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Pizza personal',
        price: '$4.80',
        image:
          'https://images.unsplash.com/photo-1548365328-8b4b34b2cd2b?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    title: 'Snacks o dulces',
    items: [
      {
        name: 'Popcorn clasico',
        price: '$3.50',
        image:
          'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Nachos con queso',
        price: '$4.25',
        image:
          'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
]

function Alimentos() {
  return (
    <main className="food">
      <header className="food__header">
        <h2 className="food__title">Alimentos</h2>
        <p className="food__subtitle">Combos listos para tu maraton de cine.</p>
      </header>
      <div className="food__sections">
        {categories.map((category) => (
          <section className="food__group" key={category.title}>
            <h3 className="food__group-title">{category.title}</h3>
            <div className="food__grid">
              {category.items.map((item) => (
                <FoodCard key={item.name} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default Alimentos
