import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="left-arrow" onClick={goToPrevious}>&#8249;</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="slide active" />
      <button className="right-arrow" onClick={goToNext}>&#8250;</button>
    </div>
  );
};

export default Carousel;