import React, { useState, useEffect } from 'react';
import LocalsCard from './LocalsCard';
import LocalsMap from './LocalsMap';
import LocalsInfoPanel from './LocalsInfoPanel';
import SliderImg from '../sliderImg/SliderImg';
import { db } from '../Firebase';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { useUser } from '../contexts/UserContext';
import './Locals.css';

const Locals = () => {
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [infoLocal, setInfoLocal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locals, setLocals] = useState([]);
  const [filteredByLove, setFilteredByLove] = useState(false);
  const { userDetails } = useUser();
  const [loveList, setLoveList] = useState([]);

  useEffect(() => {
    const fetchLocals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Locals'));
        const localsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLocals(localsList);
      } catch (error) {
        console.error('Error fetching locals:', error);
      }
    };

    const fetchLoveList = async () => {
      if (userDetails?.uid) {
        const userRef = doc(db, 'Users', userDetails.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setLoveList(data.loveList || []);
        }
      }
    };

    fetchLocals();
    fetchLoveList();
  }, [userDetails]);

  const handleLoveToggle = async (localId) => {
    if (!userDetails?.uid) return;
    const userRef = doc(db, 'Users', userDetails.uid);
    const updatedLoveList = loveList.includes(localId)
      ? loveList.filter(id => id !== localId)
      : [...loveList, localId];

    await updateDoc(userRef, { loveList: updatedLoveList });
    setLoveList(updatedLoveList);
  };

  const filteredLocals = locals.filter((local) => {
    const matchesSearch = local.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (filteredByLove) {
      return matchesSearch && loveList.includes(local.id);
    }
    return matchesSearch;
  });

  return (
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
              <button
                onClick={() => setFilteredByLove(prev => !prev)}
                className="love-filter-btn"
              >
                {filteredByLove ? 'Show All' : 'Show Love List'}
              </button>
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
                  isLoved={loveList.includes(local.id)}
                  onLoveToggle={() => handleLoveToggle(local.id)}
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
        locals={filteredLocals}
        selectedLocal={selectedLocal}
        setSelectedLocal={setSelectedLocal}
      />
      </div>
    </div>
  );
};

export default Locals;