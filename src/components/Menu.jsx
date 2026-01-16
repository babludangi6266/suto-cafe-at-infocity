import { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('beverages')

  const categories = [
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'platters', name: 'Platters' },
    { id: 'tea', name: 'Tea' },
    { id: 'coffee', name: 'Coffee' },
  ]

  const menuItems = {
    beverages: [
      { name: 'Matcha Latte', price: '₹220', image: '/assets/menu/matcha-latte.jpg', description: 'Traditional Japanese matcha with steamed milk' },
      { name: 'Fruit Smoothie', price: '₹180', image: '/assets/hero/tea-set.jpg', description: 'Fresh seasonal fruits blended to perfection' },
      { name: 'Iced Lemon Tea', price: '₹150', image: '/assets/hero/cafe-ambiance-1.jpg', description: 'Refreshing black tea with lemon and mint' },
      { name: 'Chocolate Shake', price: '₹200', image: '/assets/menu/chocolate-pastry.jpg', description: 'Rich Belgian chocolate with vanilla ice cream' },
    ],
    desserts: [
      { name: 'Matcha Cheesecake', price: '₹280', image: '/assets/menu/chocolate-pastry.jpg', description: 'Creamy cheesecake with matcha infusion' },
      { name: 'Chocolate Lava Cake', price: '₹250', image: '/assets/menu/matcha-latte.jpg', description: 'Warm chocolate cake with molten center' },
      { name: 'Tiramisu', price: '₹240', image: '/assets/hero/pastries.jpg', description: 'Classic Italian dessert with coffee soak' },
      { name: 'Fruit Tart', price: '₹220', image: '/assets/menu/fruit-platter.jpg', description: 'Buttery crust with pastry cream and fresh fruits' },
    ],
    platters: [
      { name: 'Continental Breakfast', price: '₹350', image: '/assets/menu/fruit-platter.jpg', description: 'Eggs, toast, baked beans, and sausages' },
      { name: 'Sandwich Platter', price: '₹320', image: '/assets/hero/cafe-interior.jpg', description: 'Assorted sandwiches with side salad' },
      { name: 'Cheese Board', price: '₹400', image: '/assets/hero/cafe-ambiance-2.jpg', description: 'Selection of cheeses with crackers and fruits' },
      { name: 'Veggie Wrap Combo', price: '₹280', image: '/assets/menu/special-tea.jpg', description: 'Fresh vegetable wraps with fries and dip' },
    ],
    tea: [
      { name: 'Earl Grey', price: '₹150', image: '/assets/menu/special-tea.jpg', description: 'Classic black tea with bergamot orange' },
      { name: 'Jasmine Green Tea', price: '₹160', image: '/assets/hero/tea-set.jpg', description: 'Fragrant green tea with jasmine blossoms' },
      { name: 'Masala Chai', price: '₹120', image: '/assets/hero/cafe-ambiance-1.jpg', description: 'Traditional Indian spiced tea' },
      { name: 'Peppermint Herbal', price: '₹140', image: '/assets/hero/coffee-art.jpg', description: 'Caffeine-free soothing herbal tea' },
    ],
    coffee: [
      { name: 'Espresso', price: '₹120', image: '/assets/hero/coffee-art.jpg', description: 'Strong black coffee shot' },
      { name: 'Cappuccino', price: '₹180', image: '/assets/menu/matcha-latte.jpg', description: 'Equal parts espresso, steamed milk, and foam' },
      { name: 'Cold Brew', price: '₹200', image: '/assets/hero/cafe-interior.jpg', description: 'Slow-steeped coffee served chilled' },
      { name: 'Flat White', price: '₹190', image: '/assets/menu/chocolate-pastry.jpg', description: 'Espresso with microfoam steamed milk' },
    ],
  }

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Crafted with passion, served with love</p>
        
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div className="menu-card" key={index}>
              <div className="card-glass"></div>
              <div className="card-image">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">{item.price}</span>
                </div>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-cta">
          <p className="cta-text">Visit us to explore our full menu with seasonal specials!</p>
          <button className="btn btn-primary">Download Full Menu</button>
        </div>
      </div>
    </section>
  )
}

export default Menu