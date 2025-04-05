// src/components/deals/Deals.js
import React, { useState } from 'react';
import dealsData from './DealsData';
import './Deals.css';

const Deals = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="deals-page">
      <div className="deals-list">
        {dealsData.map((deal) => (
          <div
            key={deal.id}
            className={`deal-card ${selected?.id === deal.id ? 'active' : ''}`}
            onClick={() => setSelected(deal)}
          >
            <h3>{deal.title}</h3>
            <p>{deal.highlight}</p>
            <span className="points">{deal.points} points</span>
          </div>
        ))}
      </div>

      {selected && (
        <div className="deal-details">
          <h3>{selected.title}</h3>
          <ul>
            {selected.details.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Deals;
