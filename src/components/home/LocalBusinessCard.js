import React from 'react';
import './LocalBusinessCard.css';
import { useNavigate } from 'react-router-dom';
import { TiStarFullOutline } from "react-icons/ti";


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
        <span className="rating-container">
          <TiStarFullOutline className="icon" />
          <div className="rating">{rating}</div>
        </span>
      </div>
    </div>
  );
};

export default LocalBusinessCard;
