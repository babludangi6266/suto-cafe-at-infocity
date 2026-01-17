import { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('beverages')
  const [showPreview, setShowPreview] = useState(false)

  // Define the path to your full menu image here
  const fullMenuImage = '/assets/menu/menu.jpeg' 

  const fullMenuPdf = '/assets/suto_cafe_menu.pdf'
  // Define your Swiggy URL
  const swiggyLink = 'https://www.swiggy.com/city/bhubaneswar/suto-cafe-infocity-infocity-patia-rest1270796' 

  const categories = [
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'platters', name: 'Platters' },
    { id: 'tea', name: 'Tea' },
    { id: 'coffee', name: 'Coffee' },
  ]

  const menuItems = {
    beverages: [
      { name: 'Matcha Latte', price: '₹220', image: '/assets/menu/MatchaLatte.jpg', description: 'Traditional Japanese matcha with steamed milk' },
      { name: 'Fruit Smoothie', price: '₹180', image: '/assets/menu/FruitSmoothie.jpg', description: 'Fresh seasonal fruits blended to perfection' },
      { name: 'Iced Lemon Tea', price: '₹150', image: '/assets/menu/IcedLemonTea.jpg', description: 'Refreshing black tea with lemon and mint' },
      { name: 'Chocolate Shake', price: '₹200', image: '/assets/menu/ChocolateShake.jpg', description: 'Rich Belgian chocolate with vanilla ice cream' },
    ],
    desserts: [
      { name: 'Matcha Cheesecake', price: '₹280', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWF0Y2hhJTIwTGF0dGV8ZW58MHx8MHx8fDA%3D', description: 'Creamy cheesecake with matcha infusion' },
      { name: 'Chocolate Lava Cake', price: '₹250', image: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hvY29sYXRlJTIwTGF2YSUyMENha2V8ZW58MHx8MHx8fDA%3D', description: 'Warm chocolate cake with molten center' },
      { name: 'Tiramisu', price: '₹240', image: 'https://images.unsplash.com/photo-1712262582493-01aa9ec5c7f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRpcmFtaXN1fGVufDB8fDB8fHww', description: 'Classic Italian dessert with coffee soak' },
      { name: 'Fruit Tart', price: '₹220', image: 'https://images.unsplash.com/photo-1614174486496-344ef3e9d870?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZydWl0JTIwVGFydHxlbnwwfHwwfHx8MA%3D%3D', description: 'Buttery crust with pastry cream and fresh fruits' },
    ],
    platters: [
      { name: 'Continental Breakfast', price: '₹350', image: 'https://images.unsplash.com/photo-1535567465397-7523840f2ae9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29udGluZW50YWwlMjBCcmVha2Zhc3R8ZW58MHx8MHx8fDA%3D', description: 'Eggs, toast, baked beans, and sausages' },
      { name: 'Sandwich Platter', price: '₹320', image: 'https://images.unsplash.com/photo-1622623968350-50fa1a391cf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FuZHdpY2glMjBQbGF0dGVyfGVufDB8fDB8fHww', description: 'Assorted sandwiches with side salad' },
      { name: 'Cheese Board', price: '₹400', image: 'https://images.unsplash.com/photo-1627935722051-395636b0d8a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZXNlfGVufDB8fDB8fHww', description: 'Selection of cheeses with crackers and fruits' },
      { name: 'Veggie Wrap Combo', price: '₹280', image: 'https://simplegreensmoothies.com/wp-content/uploads/veggie-wrap-hummus-easy-lunch-healthy-1.jpg', description: 'Fresh vegetable wraps with fries and dip' },
    ],
    tea: [
      { name: 'Earl Grey', price: '₹150', image: 'https://images.unsplash.com/photo-1562097691-905c0a23ee19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWFybCUyMEdyZXl8ZW58MHx8MHx8fDA%3D', description: 'Classic black tea with bergamot orange' },
      { name: 'Jasmine Green Tea', price: '₹160', image: 'https://images.unsplash.com/photo-1657895116422-9a07f3d4cf93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SmFzbWluZSUyMEdyZWVuJTIwVGVhfGVufDB8fDB8fHww', description: 'Fragrant green tea with jasmine blossoms' },
      { name: 'Masala Chai', price: '₹120', image: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzYWxhJTIwQ2hhaXxlbnwwfHwwfHx8MA%3D%3D', description: 'Traditional Indian spiced tea' },
      { name: 'Peppermint Herbal', price: '₹140', image: 'https://images.unsplash.com/photo-1709132301602-b001c50aa459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVwcGVybWludCUyMEhlcmJhbHxlbnwwfHwwfHx8MA%3D%3D', description: 'Caffeine-free soothing herbal tea' },
    ],
    coffee: [
      { name: 'Espresso', price: '₹120', image: 'https://images.unsplash.com/photo-1558416165-5fb04b79b0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEVzcHJlc3NvfGVufDB8fDB8fHww', description: 'Strong black coffee shot' },
      { name: 'Cappuccino', price: '₹180', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWF0Y2hhJTIwTGF0dGV8ZW58MHx8MHx8fDA%3D', description: 'Equal parts espresso, steamed milk, and foam' },
      { name: 'Cold Brew', price: '₹200', image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29sZCUyMEJyZXd8ZW58MHx8MHx8fDA%3D', description: 'Slow-steeped coffee served chilled' },
      { name: 'Flat White', price: '₹190', image: 'https://images.unsplash.com/photo-1620052087057-bfd8235f5874?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmxhdCUyMFdoaXRlfGVufDB8fDB8fHww', description: 'Espresso with microfoam steamed milk' },
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
          
          <div className="cta-buttons">
            {/* Wrapper for Download Button + Hover Image */}
          {/* Wrapper for Download Button + Hover Image */}
            <div className="btn-wrapper">
              {showPreview && (
                <div className="menu-preview-popup">
                  {/* We keep the image here for the visual preview */}
                  <img src={fullMenuImage} alt="Menu Preview" />
                </div>
              )}
              
              <a 
                href={fullMenuPdf}  // CHANGED: Links to the PDF now
                download="Suto_Cafe_Menu.pdf" // CHANGED: Filename ends in .pdf
                className="btn btn-primary btn-download"
                onMouseEnter={() => setShowPreview(true)}
                onMouseLeave={() => setShowPreview(false)}
              >
                Download Full Menu
              </a>
            </div>
            {/* Swiggy Button */}
            <a 
              href={swiggyLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-swiggy"
            >
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu