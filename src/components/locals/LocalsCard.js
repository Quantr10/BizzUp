import React from 'react';
import './LocalsCard.css';

const LocalsCard = ({ local, onClick, selected }) => {
  return (
    <div
      className={`card-horizontal ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="card-image">
        <img src={local.image} alt={local.name} />
      </div>
      <div className="card-info">
        <h3>{local.name}</h3>
        <p className="description">{local.shortDescription}</p>
        <div className="meta">
          <span className="rating">⭐ {local.rating}</span>
          <span className="details-link">View Details</span>
        </div>
      </div>
    </div>
  );
};

export default LocalsCard;
