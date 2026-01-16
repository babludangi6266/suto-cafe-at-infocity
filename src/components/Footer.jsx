import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-slogan">
            <h2 className="slogan-text">Jee Bhar Ke</h2>
            <p className="slogan-subtext">Live, laugh, and savor every moment</p>
          </div>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-title">Visit Us</h3>
              <div className="footer-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <p>Suto Cafe, Infocity, Bhubaneswar, Odisha 751024</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <p>+91 98765 43210</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <p>hello@sutocafe.com</p>
                </div>
              </div>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-title">Order Online</h3>
              <p className="footer-text">Get your favorite Suto treats delivered to your doorstep</p>
              <div className="delivery-buttons">
                <a 
                  href="https://www.zomato.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="delivery-btn zomato"
                >
                  Order on Zomato
                </a>
                <a 
                  href="https://www.swiggy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="delivery-btn swiggy"
                >
                  Order on Swiggy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            © {currentYear} Suto Cafe. All rights reserved.
          </div>
          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer