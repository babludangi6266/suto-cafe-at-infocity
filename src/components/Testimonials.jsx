import { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Placeholder for your actual Google Maps Review link
  // Replace this URL with the actual 'Share Review' link from your Google Business Profile
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/LGj5v9jy47dsjDdv5";

  const testimonials = [
    {
      name: 'Satyajit Mohanty',
      role: 'Regular Visitor',
      quote: 'The matcha latte at Suto Cafe is the best in Bhubaneswar! The ambiance is perfect for both work and relaxation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Priyadarshini Jena',
      role: 'Food Blogger',
      quote: 'As a food blogger, I\'ve visited countless cafes. Suto stands out for its consistency, quality, and the warm staff.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Abinash Das',
      role: 'Student',
      quote: 'My go-to study spot! Great coffee, free WiFi, and the standup comedy nights are an amazing bonus.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Lopamudra Sahoo',
      role: 'Office Worker',
      quote: 'The platters are generous and delicious. Perfect for a quick lunch break. The "Jee Bhar Ke" vibe is real!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Soumya Ranjan Patra',
      role: 'Matcha Enthusiast',
      quote: 'Finally, a cafe that understands matcha! Their preparation is authentic, and the presentation is always Instagram-worthy.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="gallery" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">According to You</h2>
        <p className="section-subtitle">What our customers say about us</p>
        
        <div className="testimonials-container">
          <button 
            className="testimonial-nav prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          
          <div className="testimonials-track">
            <div 
              className="testimonials-slide"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                  key={index}
                >
                  <div className="quote-icon">"</div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <div className="author-rating">
                        {'★'.repeat(testimonial.rating)}
                        {'☆'.repeat(5 - testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="testimonial-nav next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* New Aesthetic Review Section */}
        <div className="review-cta-container">
          <div className="review-cta-content">
            <h3>Loved your experience at Suto?</h3>
            <p>Your words help us brew better stories. Share your thoughts with us on Google.</p>
            <a 
              href={GOOGLE_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="google-review-btn"
            >
              <span className="google-icon">G</span> Write a Review
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials