import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrollingToReport, setIsScrollingToReport] = useState(false);
  const carouselRef = useRef(null);
  const reportRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be considered a swipe
  const minSwipeDistance = 50;


  const images = [
    {
      small: 'https://placehold.co/375x812/2ecc71/ffffff?text=IMG+1',
      large: 'https://placehold.co/1900x1200/2ecc71/ffffff?text=IMG+1',
    },
    {
      small: 'https://placehold.co/375x812/2dcc71/ffffff?text=IMG+2',
      large: 'https://placehold.co/1900x1200/2dcc71/ffffff?text=IMG+2',
    },
    {
      small: 'https://placehold.co/375x812/2ccc71/ffffff?text=IMG+3',
      large: 'https://placehold.co/1900x1200/2ccc71/ffffff?text=IMG+3',
    },
    {
      small: 'https://placehold.co/375x812/2bcc71/ffffff?text=IMG+4',
      large: 'https://placehold.co/1900x1200/2bcc71/ffffff?text=IMG+4',
    },
    {
      small: 'https://placehold.co/375x812/2acc71/ffffff?text=IMG+5',
      large: 'https://placehold.co/1900x1200/2acc71/ffffff?text=IMG+5',
    },
    {
      small: 'https://placehold.co/375x812/2fcc71/ffffff?text=IMG+6',
      large: 'https://placehold.co/1900x1200/2fcc71/ffffff?text=IMG+6',
    },
    {
      small: 'https://placehold.co/375x812/2eac71/ffffff?text=IMG+7',
      large: 'https://placehold.co/1900x1200/2eac71/ffffff?text=IMG+7',
    },
  ];

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe)
      console.log('Swipe detected.', { isLeftSwipe, isRightSwipe })
    // add your conditional logic here
    if (isLeftSwipe){
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }
    if(isRightSwipe){
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }

  }

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
        <div className="carousel-container" ref={carouselRef}
             onTouchStart={onTouchStart}
             onTouchMove={onTouchMove}
             onTouchEnd={onTouchEnd}
        >
          {images.map((image, index) => (
              <div
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    backgroundImage: `url(${
                        window.innerWidth < 768 ? image.small : image.large
                    })`,
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