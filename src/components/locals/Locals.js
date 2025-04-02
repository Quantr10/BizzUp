import React, { useState } from 'react';
import LocalsCard from './LocalsCard';
import LocalsMap from './LocalsMap';
import LocalsData from './LocalsData';
import './Locals.css';

const Locals = () => {
  const [selectedLocal, setSelectedLocal] = useState(null);

  return (
    <div className="locals-page">
      <div className="locals-list">
        {LocalsData.map((local, index) => (
          <LocalsCard
            key={index}
            local={local}
            onClick={() => setSelectedLocal(local)}
            selected={selectedLocal?.name === local.name}
          />
        ))}
      </div>
      <div className="locals-map-section">
        <LocalsMap selectedLocal={selectedLocal} setSelectedLocal={setSelectedLocal} />
      </div>
    </div>
  );
};

export default Locals;
