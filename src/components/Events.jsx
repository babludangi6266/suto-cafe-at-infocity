import './Events.css'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Comedy Litmus Open Mic',
      date: 'Every Friday, 8 PM',
      description: 'An evening of laughter with budding comedians from Bhubaneswar. Sign up for a 5-min slot or just enjoy the show!',
      image: '../../public/assets/comedy/image1.png',
      featured: true
    },
    {
      title: 'Sunday Standup Special',
      date: 'First Sunday of Every Month',
      description: 'Featuring established comedians from across India. An evening of premium comedy with food and drink specials.',
      image: '../../public/assets/comedy/image2.png',
      featured: false
    },
    {
      title: 'Open Mic Night',
      date: 'Every Wednesday, 7 PM',
      description: 'Not just comedy! Music, poetry, and storytelling welcome. A platform for all kinds of performers.',
      image: '../../public/assets/comedy/image.png',
      featured: false
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
              <div className="event-image">
                <img 
                  src={event.image} 
                  alt={event.title}
                  loading="lazy"
                />
                {event.featured && <div className="featured-badge">Featured</div>}
              </div>
              
              <div className="event-content">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-actions">
                  <button className="btn-event btn-book">Book Now</button>
                  <button className="btn-event btn-details">More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="events-info">
          <div className="info-box">
            <h4>Want to Perform?</h4>
            <p>We're always looking for fresh talent! Email us at <strong>events@sutocafe.com</strong> with your details and we'll get back to you.</p>
          </div>
          <div className="info-box">
            <h4>Entry & Reservations</h4>
            <p>Entry is free for all events. For groups of 6+ or to reserve the best seats, please call us at <strong>+91 98765 43210</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events