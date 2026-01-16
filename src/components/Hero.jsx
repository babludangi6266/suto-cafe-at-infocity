import './Hero.css'

const Hero = () => {
  // Image filenames from the public/assets/hero folder
  const heroImages = [
    '/assests/about/about.png',
    '/assests/about/croissant.png',
    '/assests/comedy/image.png',
    '/assests/about/dessert.png',
    '/assests/about/hero2.jpeg',
    '/assests/about/hero2.jpeg',
    // '/assets/hero/cafe-ambiance-1.jpg',
    // '/assets/hero/matcha-latte.jpg',
    // '/assets/hero/coffee-art.jpg',
    // '/assets/hero/pastries.jpg',
    // '/assets/hero/cafe-interior.jpg',
    // '/assets/hero/tea-set.jpg',
    // '/assets/hero/cafe-ambiance-2.jpg',
  ]

  return (
    <section id="home" className="hero">
      <div className="marquee-container">
        <div className="marquee-track">
          {/* First set of images */}
          {heroImages.map((img, index) => (
            <div className="marquee-item" key={`first-${index}`}>
              <div className="image-wrapper">
                <img 
                  src={img} 
                  alt={`Suto Cafe ambiance ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {heroImages.map((img, index) => (
            <div className="marquee-item" key={`second-${index}`}>
              <div className="image-wrapper">
                <img 
                  src={img} 
                  alt={`Suto Cafe ambiance ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Suto Cafe</h1>
          <p className="hero-subtitle">Jee Bhar Ke</p>
          <p className="hero-description">
            Where nature meets flavor. Experience the perfect blend of matcha, coffee, and cozy vibes at Infocity, Bhubaneswar.
          </p>
          <button 
            className="btn btn-primary hero-cta"
            onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Menu
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero