import './About.css'

const About = () => {
  const aboutImages = [
    '../../public/assets/about/about.png',
    '../../public/assets/about/croissant.png',
    '../../public/assets/about/matcha.jpg',
    '../../public/assets/about/dessert.png',
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">Behind The Scene</h2>
        
        <div className="about-content">
          <div className="about-images">
            {aboutImages.map((img, index) => (
              <div 
                className={`about-image-wrapper image-${index + 1}`} 
                key={index}
              >
                <div className="blob-shape"></div>
                <img 
                  src={img} 
                  alt="Suto Cafe item" 
                  className="about-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className="about-text">
            <h3 className="about-heading">Our Story in Infocity</h3>
            <p className="about-description">
              Suto Cafe began as a dream to create a space where technology meets tranquility. Nestled in the heart of Infocity, Bhubaneswar, we offer a sanctuary from the bustling digital world.
            </p>
            <p className="about-description">
              Our passion for food and community inspired us to craft a menu that celebrates nature's flavors. From our signature matcha lattes to artisanal pastries, every item tells a story of dedication and love for quality ingredients.
            </p>
            <p className="about-description">
              At Suto Cafe, we believe in living "Jee Bhar Ke" - embracing every moment with energy and joy. Our space is designed to inspire connections, creativity, and of course, great conversations over even better coffee.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">2019</span>
                <span className="highlight-text">Year Established</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">50+</span>
                <span className="highlight-text">Menu Items</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">1000+</span>
                <span className="highlight-text">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About