import React, { useState } from 'react';
import LocalsCard from './LocalsCard';
import LocalsMap from './LocalsMap';
import LocalsData from './LocalsData';
import './Locals.css';

const Locals = () => {
  const [hoveredLocal, setHoveredLocal] = useState(null);

  return (
    <div className="locals-page">
      <div className="locals-list">
        {LocalsData.map((local, index) => (
          <LocalsCard
            key={index}
            local={local}
            onHover={() => setHoveredLocal(local)}
            onLeave={() => setHoveredLocal(null)}
          />
        ))}
      </div>
      <div className="locals-map-section">
        <LocalsMap hoveredLocal={hoveredLocal} />
      </div>
    </div>
  );
};

export default Locals;
