import React, { useState, useEffect } from 'react';
import './SliderImg.css';

const images = [
  require('../../assets/sliderImg/deal 4.jpg'),
  require('../../assets/sliderImg/deal 5.jpg'),
  require('../../assets/sliderImg/deal 6.jpg'),
  require('../../assets/sliderImg/deal 7.jpg'),
  require('../../assets/sliderImg/deal 8.jpg'),
  require('../../assets/sliderImg/27.jpg'),
  require('../../assets/sliderImg/28.jpg'),
  require('../../assets/sliderImg/29.jpg'),
];

const SliderImg = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-img-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt={`slide-${i}`} className="slider-img" />
        ))}
      </div>
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImg;
