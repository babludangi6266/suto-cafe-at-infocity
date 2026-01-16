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
      src: '../../public/assets/comedy/image.png',
      title: 'Cozy Corner',
      description: 'Our favorite reading nook with natural lighting',
      featured: true
    },
    {
      id: 2,
      type: 'image',
      category: 'food',
      src: '../../public/assets/comedy/image1.png',
      title: 'Matcha Delight',
      description: 'Signature matcha dessert with seasonal fruits',
      featured: true
    },
    {
      id: 3,
      type: 'video',
      category: 'events',
      thumbnail: '../../public/assets/comedy/image1.png',
      videoUrl: '../../public/assets/video1.mp4',
      title: 'Comedy Night Highlights',
      description: 'Laughter and good times at our weekly comedy show'
    },
    {
      id: 4,
      type: 'image',
      category: 'ambiance',
      src: '../../public/assets/comedy/image.png',
      title: 'Modern Interior',
      description: 'Minimalist design with warm wooden accents'
    },
    {
      id: 5,
      type: 'image',
      category: 'food',
      src: '../../public/assets/comedy/image2.png',
      title: 'Latte Art',
      description: 'Handcrafted coffee with beautiful art'
    },
    {
      id: 6,
      type: 'video',
      category: 'events',
      thumbnail: '../../public/assets/comedy/image.png',
      videoUrl: '../../public/assets/video2.mp4',
      title: 'Live Music Session',
      description: 'Acoustic nights at Suto Cafe'
    },
    {
      id: 7,
      type: 'image',
      category: 'people',
      src: '../../public/assets/comedy/image.png',
      title: 'Happy Moments',
      description: 'Our customers enjoying their time at Suto'
    },
    {
      id: 8,
      type: 'image',
      category: 'food',
      src: '../../public/assets/comedy/image1.png',
      title: 'Artisanal Platter',
      description: 'Fresh, locally sourced ingredients'
    },
    {
      id: 9,
      type: 'image',
      category: 'ambiance',
      src: '../../public/assets/comedy/image2.png',
      title: 'Evening Vibes',
      description: 'Golden hour at the cafe',
      featured: true
    },
    {
      id: 10,
      type: 'video',
      category: 'events',
      thumbnail: '../../public/assets/comedy/image.png',
      videoUrl: '../../public/assets/video2.mp4',
      title: 'Barista Workshop',
      description: 'Learn the art of coffee making'
    },
    {
      id: 11,
      type: 'image',
      category: 'people',
      src: '../../public/assets/comedy/image.png',
      title: 'Our Team',
      description: 'The passionate people behind Suto Cafe'
    },
    {
      id: 12,
      type: 'image',
      category: 'food',
      src: '../../public/assets/menu/ChocolateShake.jpg',
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
            <h3>Share Your Suto Moments</h3>
            <p>Tag <strong>@sutocafe</strong> on Instagram to be featured in our gallery</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary instagram-btn"
            >
              Follow Us on Instagram
            </a>
          </div>
          <div className="instagram-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
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