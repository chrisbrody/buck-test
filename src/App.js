import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrollingToReport, setIsScrollingToReport] = useState(false);
  const carouselRef = useRef(null);
  const reportRef = useRef(null);

  const images = [
    'https://placehold.co/1900x1200/2ecc71/ffffff?text=IMG+1',
    'https://placehold.co/1900x1200/2dcc71/ffffff?text=IMG+2',
    'https://placehold.co/1900x1200/2ccc71/ffffff?text=IMG+3',
    'https://placehold.co/1900x1200/2bcc71/ffffff?text=IMG+4',
    'https://placehold.co/1900x1200/2acc71/ffffff?text=IMG+5',
    'https://placehold.co/1900x1200/2fcc71/ffffff?text=IMG+6',
    'https://placehold.co/1900x1200/2eac71/ffffff?text=IMG+7',
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const scrollToReport = () => {
    setIsScrollingToReport(true);
    if (reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsScrollingToReport(false);
  };

  useEffect(() => {
    if (isScrollingToReport) return;

    let intervalId;

    if (currentSlide < totalSlides - 1) {
      intervalId = setInterval(nextSlide, 2000);
    } else if (currentSlide === totalSlides - 1) {
      intervalId = setTimeout(() => {
        scrollToReport();
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [currentSlide, totalSlides, isScrollingToReport]);

  return (
      <div className="app-container">
        <div className="carousel-container" ref={carouselRef}>
          {images.map((image, index) => (
              <div
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    backgroundImage: `url(${image})`,
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
              />
          ))}
        </div>
        <div ref={reportRef} className="report-section">
          <h1>Report Section</h1>
          <p>Scroll to report</p>
        </div>
      </div>
  );
};

export default App;