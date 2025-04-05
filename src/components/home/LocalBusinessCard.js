import React from 'react';
import './LocalBusinessCard.css';

const LocalBusinessCard = ({ name, image, shortDescription, rating }) => {
  return (
    <div className="local-business-card">
      <img src={image} alt={name} className="business-image" />
      <div className="business-info">
        <h4 className="business-name">{name}</h4>
        <p className="business-desc">{shortDescription}</p>
        <p className="business-rating">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default LocalBusinessCard;
