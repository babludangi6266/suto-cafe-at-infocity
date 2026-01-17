// import './Hero.css'

// const Hero = () => {
//   // Image filenames from the public/assets/hero folder
//   const heroImages = [
//     '/assests/about/about.png',
//     '/assets/about/croissant.png',
//     '/assets/comedy/image.png',
//     '/assets/about/dessert.png',
//     '/assets/about/hero2.jpeg',
//     '/assets/about/hero2.jpeg',
//     // '/assets/hero/cafe-ambiance-1.jpg',
//     // '/assets/hero/matcha-latte.jpg',
//     // '/assets/hero/coffee-art.jpg',
//     // '/assets/hero/pastries.jpg',
//     // '/assets/hero/cafe-interior.jpg',
//     // '/assets/hero/tea-set.jpg',
//     // '/assets/hero/cafe-ambiance-2.jpg',
//   ]

//   return (
//     <section id="home" className="hero">
//       <div className="marquee-container">
//         <div className="marquee-track">
//           {/* First set of images */}
//           {heroImages.map((img, index) => (
//             <div className="marquee-item" key={`first-${index}`}>
//               <div className="image-wrapper">
//                 <img 
//                   src={img} 
//                   alt={`Suto Cafe ambiance ${index + 1}`}
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           ))}
          
//           {/* Duplicate set for seamless loop */}
//           {heroImages.map((img, index) => (
//             <div className="marquee-item" key={`second-${index}`}>
//               <div className="image-wrapper">
//                 <img 
//                   src={img} 
//                   alt={`Suto Cafe ambiance ${index + 1}`}
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <h1 className="hero-title">Suto Cafe</h1>
//           <p className="hero-subtitle">Jee Bhar Ke</p>
//           <p className="hero-description">
//             Where nature meets flavor. Experience the perfect blend of matcha, coffee, and cozy vibes at Infocity, Bhubaneswar.
//           </p>
//           <button 
//             className="btn btn-primary hero-cta"
//             onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
//           >
//             Explore Our Menu
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const heroImages = [
    '/assets/hero/hero (1).jpeg',
    '/assets/hero/hero (2).jpeg',
    '/assets/hero/hero (3).jpeg',
    '/assets/hero/hero (4).jpeg',
    '/assets/hero/hero-sec (1).jpeg',
    '/assets/hero/hero-sec (2).jpeg',
    '/assets/hero/hero-sec (3).jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="home" className="hero-section">
      {/* Background Slider */}
      <div className="slider-container">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            // This creates the sliding motion (Right to Left)
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img src={img} alt={`Suto Cafe ${index}`} />
            
            {/* Gradient Overlay to make text readable without a card */}
            <div className="hero-gradient"></div>
          </div>
        ))}
      </div>

      {/* Floating Aesthetic Text */}
      <div className="hero-content">
        <div className="text-wrapper">
          <p className="hero-tagline">EST. 2024 • BHUBANESWAR</p>
          <h1 className="hero-title">
            Suto <span className="highlight">Cafe</span>
          </h1>
          <p className="hero-subtitle">Jee Bhar Ke</p>
          
          <button 
            className="aesthetic-btn"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </button>
        </div>
      </div>
      
      {/* Simple Indicators */}
      <div className="indicators">
        {heroImages.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;