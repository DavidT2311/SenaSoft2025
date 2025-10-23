import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
  {
    url: 'https://www.clarin.com/img/2023/10/07/0sEURTdRz_2000x1500__1.jpg',
    name: 'Bogotá'
  },
  {
    url: 'https://panamericanworld.com/wp-content/uploads/2023/08/medellin-1080x675.jpg',
    name: 'Medellín'
  },
  {
    url: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/06/CO_X-lugares-turi%CC%81sticos-de-Cali-que-te-dejara%CC%81n-sin-palabras.jpg',
    name: 'Cali'
  },
];

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">  
      <div
        className="carousel-slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map(({ url }, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      {/* Nombre de la imagen actual */}
      <div className="carousel-caption">
        {images[currentIndex].name}
      </div>
    </div>
  );
}

export default CarouselComponent;
