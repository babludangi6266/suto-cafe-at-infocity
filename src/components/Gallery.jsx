// src/components/Gallery.jsx
import { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'ambiance',
      src: '/assets/comedy/image.png',
      title: 'Cozy Corner',
      description: 'Our favorite reading nook with natural lighting',
      featured: true
    },
    {
      id: 2,
      type: 'image',
      category: 'food',
      src: '/assets/hero/hero-sec (1).jpeg',
      title: 'Matcha Delight',
      description: 'Signature matcha dessert with seasonal fruits',
      featured: true
    },
    {
      id: 3,
      type: 'video',
      category: 'events',
      thumbnail: '/assets/comedy/image1.png',
      videoUrl: '/assets/video1.mp4',
      title: 'Comedy Night Highlights',
      description: 'Laughter and good times at our weekly comedy show'
    },
    {
      id: 4,
      type: 'image',
      category: 'ambiance',
      src: '/assets/comedy/image.png',
      title: 'Modern Interior',
      description: 'Minimalist design with warm wooden accents'
    },
    {
      id: 5,
      type: 'image',
      category: 'food',
      src: '/assets/hero/hero-sec (2).jpeg',
      title: 'Latte Art',
      description: 'Handcrafted coffee with beautiful art'
    },
    {
      id: 6,
      type: 'video',
      category: 'events',
      thumbnail: '/assets/comedy/image.png',
      videoUrl: '/assets/video2.mp4',
      title: 'Live Music Session',
      description: 'Acoustic nights at Suto Cafe'
    },
    {
      id: 7,
      type: 'image',
      category: 'people',
      src: '/assets/hero/hero (1).jpeg',
      title: 'Happy Moments',
      description: 'Our customers enjoying their time at Suto'
    },
    {
      id: 8,
      type: 'image',
      category: 'food',
      src: '/assets/hero/hero-sec (3).jpeg',
      title: 'Artisanal Platter',
      description: 'Fresh, locally sourced ingredients'
    },
    {
      id: 9,
      type: 'image',
      category: 'ambiance',
      src: '/assets/comedy/image2.png',
      title: 'Evening Vibes',
      description: 'Golden hour at the cafe',
      featured: true
    },
    {
      id: 10,
      type: 'video',
      category: 'events',
      thumbnail: '/assets/comedy/image.png',
      videoUrl: '/assets/video2.mp4',
      title: 'Barista Workshop',
      description: 'Learn the art of coffee making'
    },
    {
      id: 11,
      type: 'image',
      category: 'people',
      src: '/assets/hero/hero (2).jpeg',
      title: 'Our Team',
      description: 'The passionate people behind Suto Cafe'
    },
    {
      id: 12,
      type: 'image',
      category: 'food',
      src: '/assets/menu/ChocolateShake.jpg',
      title: 'Tea Ceremony',
      description: 'Traditional tea preparation with modern twist'
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ambiance', label: 'Ambiance' },
    { id: 'food', label: 'Food & Drinks' },
    { id: 'events', label: 'Events' },
    { id: 'people', label: 'People' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const featuredItems = galleryItems.filter(item => item.featured)

  const openLightbox = (item) => {
    setSelectedMedia(item)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when lightbox is open
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedMedia(null)
    document.body.style.overflow = 'auto'
  }

  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id)
    let nextIndex
    
    if (direction === 'next') {
      nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    } else {
      nextIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    }
    
    setSelectedMedia(filteredItems[nextIndex])
  }

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Visual stories from Suto Cafe</p>

        {/* Featured Gallery - Carousel Style */}
        {featuredItems.length > 0 && (
          <div className="featured-gallery">
            <h3 className="featured-title">Featured Moments</h3>
            <div className="featured-track">
              {featuredItems.map((item) => (
                <div 
                  className="featured-item" 
                  key={`featured-${item.id}`}
                  onClick={() => openLightbox(item)}
                >
                  <div className="featured-image">
                    {item.type === 'image' ? (
                      <img 
                        src={item.src} 
                        alt={item.title}
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          loading="lazy"
                        />
                        <div className="video-overlay">
                          <div className="play-button">
                            <svg viewBox="0 0 24 24" fill="white">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="featured-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`gallery-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Main Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              className={`gallery-item ${item.type} ${item.featured ? 'featured' : ''}`}
              key={item.id}
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-item-inner">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    loading="lazy"
                    className="gallery-media"
                  />
                ) : (
                  <div className="video-container">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      loading="lazy"
                      className="gallery-media"
                    />
                    <div className="video-overlay">
                      <div className="play-button">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="gallery-overlay">
                  <div className="media-type">
                    {item.type === 'image' ? (
                      <span className="type-icon">📷</span>
                    ) : (
                      <span className="type-icon">🎥</span>
                    )}
                  </div>
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="instagram-cta">
          <div className="instagram-content">
            <div className="insta-header">
              <span className="insta-tag">@sutocafe</span>
            </div>
            <h3>Share Your Suto Moments</h3>
            <p>Snap, tag, and get featured! Join our community of food lovers on Instagram.</p>
            
            <a 
              href="https://www.instagram.com/sutocafe_infocity/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn insta-btn"
            >
              Follow Us
            </a>
          </div>
          
          <div className="instagram-visual">
            <div className="insta-logo-3d">
              {/* Official Instagram Gradient Logo SVG */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path fill="url(#instaGradient)" d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/>
                <path fill="url(#instaGradient)" d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/>
                <circle fill="url(#instaGradient)" cx="351.5" cy="160.5" r="21.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox/Modal for Media Viewing */}
      {lightboxOpen && selectedMedia && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            
            <button className="lightbox-nav prev" onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('prev')
            }}>
              &lt;
            </button>
            
            <div className="lightbox-media">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.title}
                  className="lightbox-image"
                />
              ) : (
                <div className="lightbox-video">
                  <iframe
                    src={selectedMedia.videoUrl}
                    title={selectedMedia.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              
              <div className="lightbox-info">
                <h3>{selectedMedia.title}</h3>
                <p>{selectedMedia.description}</p>
                <div className="lightbox-meta">
                  <span className="media-category">{selectedMedia.category}</span>
                  <span className="media-type">
                    {selectedMedia.type === 'image' ? 'Photo' : 'Video'}
                  </span>
                </div>
              </div>
            </div>
            
            <button className="lightbox-nav next" onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery