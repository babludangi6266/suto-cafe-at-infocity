import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About Us', id: 'about' },
    { name: 'Events', id: 'events' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Suto Cafe - Infocity</span>
        </div>
        
        {isMobile ? (
          <>
            <button 
              className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="mobile-menu-content">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    className="mobile-nav-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar