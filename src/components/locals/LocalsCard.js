import React from 'react';
import { AiOutlineInfoCircle, AiOutlineHeart } from 'react-icons/ai';
import './LocalsCard.css';

const LocalsCard = ({ local, onClick, onInfoClick, selected }) => {
  return (
    <div className={`card-horizontal ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-image">
        <img src={local.image} alt={local.name} />
      </div>
      <div className="card-info">
        <h3>{local.name}</h3>
        <p className="description">{local.shortDescription}</p>
        <p className="address">{local.address}</p>
        <div className="meta">
          <span className="rating">⭐ {local.rating}</span>
          <span
            className="icons"
          >
            <AiOutlineInfoCircle 
              className="icon" 
              onClick={(e) => {
                e.stopPropagation();
                onInfoClick();
              }}
              title="More Info"
            />
            <AiOutlineHeart className="icon" title="Favorite" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalsCard;
