import React, { useState } from 'react';
import LocalsCard from './LocalsCard';
import LocalsMap from './LocalsMap';
import LocalsData from './LocalsData';
import './Locals.css';

const Locals = () => {
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocals = LocalsData.filter((local) =>
    local.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locals-page">
      <div className="locals-list">
        <input
          type="text"
          placeholder="Search locals..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredLocals.length === 0 ? (
          <div className="card-horizontal no-result-card">
            <div className="card-info">
              <h3>No results found</h3>
              <p className="description">Try searching for something else.</p>
            </div>
          </div>
        ) : (
          filteredLocals.map((local, index) => (
            <LocalsCard
              key={index}
              local={local}
              onClick={() => setSelectedLocal(local)}
              selected={selectedLocal?.name === local.name}
            />
          ))
        )}
      </div>

      <div className="locals-map-section">
        <LocalsMap
          selectedLocal={selectedLocal}
          setSelectedLocal={setSelectedLocal}
        />
      </div>
    </div>
  );
};

export default Locals;
