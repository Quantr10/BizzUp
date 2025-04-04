import React, { useState } from 'react';
import LocalsCard from './LocalsCard';
import LocalsMap from './LocalsMap';
import LocalsInfoPanel from './LocalsInfoPanel';
import SliderImg from '../sliderImg/SliderImg';
import LocalsData from './LocalsData';
import './Locals.css';

const Locals = () => {
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [infoLocal, setInfoLocal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocals = LocalsData.filter((local) =>
    local.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
            {/* <SliderImg/> */}
            <div className="locals-page">
      <div className="locals-list">
        {!infoLocal ? (
          <>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search locals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                  onInfoClick={() => setInfoLocal(local)}
                  selected={selectedLocal?.name === local.name}
                />
              ))
            )}
          </>
        ) : (
          <LocalsInfoPanel
            local={infoLocal}
            onClose={() => setInfoLocal(null)}
          />
        )}
      </div>

      <div className="locals-map-section">
        <LocalsMap
          selectedLocal={selectedLocal}
          setSelectedLocal={setSelectedLocal}
        />
      </div>
    </div>

    </div>
  );
};

export default Locals;
