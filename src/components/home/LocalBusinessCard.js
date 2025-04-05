import React from 'react';
import './LocalBusinessCard.css';
import { useNavigate } from 'react-router-dom';

const LocalBusinessCard = ({ id, name, image, shortDescription, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/locals', { state: { localId: id } });
  };

  return (
    <div className="local-business-card" onClick={handleClick}>
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
