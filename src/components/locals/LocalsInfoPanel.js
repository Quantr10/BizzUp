import React from 'react';
import './LocalsInfoPanel.css';

const LocalsInfoPanel = ({ local, onClose }) => {
  return (
    <div className="info-panel">
      <button className="close-btn" onClick={onClose}>← Back</button>
      <img src={local.image} alt={local.name} className="info-img" />
      <h2>{local.name}</h2>
      <p className="description">{local.shortDescription}</p>
      <p><strong>Rating:</strong> ⭐ {local.rating}</p>
      <p><strong>Address:</strong> {local.address}</p>
      <p><strong>Phone:</strong> {local.tel}</p>
      <p><strong>Website:</strong> <a href={local.website} target="_blank" rel="noopener noreferrer">{local.website}</a></p>
      <p><strong>Google Maps:</strong> <a href={local.mapURL} target="_blank" rel="noopener noreferrer">View</a></p>
      <h4>Opening Hours:</h4>
      <ul>
        {Object.entries(local.hours).map(([day, time]) => (
          <li key={day}><strong>{day}:</strong> {time}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocalsInfoPanel;
