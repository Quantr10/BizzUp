import React, { useState, useEffect } from 'react';
import LocalsCard from './LocalsCard';
import LocalsMap from './LocalsMap';
import SliderImg from '../sliderImg/SliderImg';
import { useLocation } from 'react-router-dom';
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
  const [localData, setLocalData] = useState(null);

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

  useEffect(() => {
    const fetchLocalDetails = async () => {
      if (infoLocal?.id) {
        try {
          const docRef = doc(db, 'Locals', infoLocal.id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setLocalData(docSnap.data());
          }
        } catch (error) {
          console.error('Error fetching local details:', error);
        }
      }
    };

    fetchLocalDetails();
  }, [infoLocal]);

  const location = useLocation();

useEffect(() => {
  if (location.state?.localId && locals.length > 0) {
    const matched = locals.find((l) => l.id === location.state.localId);
    if (matched) {
      setInfoLocal(matched);
      setSelectedLocal(matched);
    }
  }
}, [location.state, locals]);


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
                  onInfoClick={() => {
                    setInfoLocal(local);
                    setLocalData(null);
                  }}
                  selected={selectedLocal?.name === local.name}
                  isLoved={loveList.includes(local.id)}
                  onLoveToggle={() => handleLoveToggle(local.id)}
                />
              ))
            )}
          </>
        ) : (
          localData ? (
            <div className="info-panel">
              <button className="close-btn" onClick={() => setInfoLocal(null)}>← Back</button>
              <img src={localData.image} alt={localData.name} className="info-img" />
              <h2>{localData.name}</h2>
              <p className="description">{localData.shortDescription}</p>
              <p><strong>Rating:</strong> ⭐ {localData.rating}</p>
              <p><strong>Address:</strong> {localData.address}</p>
              <p><strong>Phone:</strong> {localData.tel}</p>
              <p><strong>Website:</strong> <a href={localData.website} target="_blank" rel="noopener noreferrer">{localData.website}</a></p>
              <p><strong>Google Maps:</strong> <a href={localData.mapURL} target="_blank" rel="noopener noreferrer">View</a></p>
              <h4>Opening Hours:</h4>
              <ul>
                {Object.entries(localData.hours).map(([day, time]) => (
                  <li key={day}><strong>{day}:</strong> {time}</li>
                ))}
              </ul>
            </div>
          ) : <p>Loading details...</p>
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