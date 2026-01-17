

import './Events.css'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Comedy Litmus Open Mic',
      date: 'Every Friday, 6 PM',
      description: 'An evening of laughter with budding comedians from Bhubaneswar. Sign up for a 5-min slot or just enjoy the show!',
      // Now using an array of images for the marquee
      images: [
        '/assets/comedy/image1.png',
        '/assets/comedy/image2.png', // Add your extra image paths here
        '/assets/comedy/image.png',
        '/assets/comedy/image1.png'  // repeatable for testing
      ],
      featured: true,
      bookingLink: 'https://in.bookmyshow.com/events/comedy-litmus/ET00440860?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhVuaYmyRct0hNKpMdRAxY92GJOJd3qqZRMgIBAp-Q-HP9E14QIFQgAYS168_aem_7Y09QI5GjSIbWg8WgCXjIw',
      infoLink: 'https://www.instagram.com/sutocafe_infocity/'
    }
  ]

  return (
    <section id="events" className="section events-section">
      <div className="container">
        <h2 className="section-title">Events at Suto</h2>
        <p className="section-subtitle">Laugh a little (or a lot) with our standup comedy nights</p>
        
        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <div 
              className={`event-card ${event.featured ? 'featured' : ''}`} 
              key={index}
            >
              {/* Marquee Image Section */}
              <div className="event-image-wrapper">
                <div className="marquee-track">
                  {/* We map twice to create the infinite scroll effect seamlessly */}
                  {[...event.images, ...event.images].map((imgSrc, imgIndex) => (
                    <div className="marquee-item" key={imgIndex}>
                      <img 
                        src={imgSrc} 
                        alt={`${event.title} ${imgIndex}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {event.featured && <div className="featured-badge">Featured</div>}
              </div>
              
              <div className="event-content">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-actions">
                  <a 
                    href={event.bookingLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-event btn-book"
                  >
                    Book Now
                  </a>
                  <a 
                    href={event.infoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-event btn-details"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="events-info">
          <div className="info-box">
            <h4>Want to Perform?</h4>
            <p>We're always looking for fresh talent! DM us at <strong>Instagram</strong> with your details and we'll get back to you.</p>
          </div>
          <div className="info-box">
            <h4>Entry & Reservations</h4>
            <p>Entry is free for all events. For groups of 6+ or to reserve the best seats, please call us at <strong>+91 96686 65219</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events