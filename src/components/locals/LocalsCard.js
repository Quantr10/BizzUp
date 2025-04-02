import React from 'react';
import './LocalsCard.css';

const LocalsCard = ({ local, onHover, onLeave }) => {
  return (
    <div
      className="card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="card-img">
        <img src={local.image} alt={local.name} />
      </div>
      <div>
        <h3>{local.name}</h3>
      </div>
      <div className="card-content">
        <span>⭐ {local.rating}</span>
        <span>View Details</span>
      </div>
    </div>
  );
};


export default LocalsCard;
