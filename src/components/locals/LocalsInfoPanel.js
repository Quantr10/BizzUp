import React, { useEffect, useState } from 'react';
import './LocalsInfoPanel.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const LocalsInfoPanel = ({ local, onClose }) => {
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    const fetchLocal = async () => {
      try {
        const docRef = doc(db, 'Locals', local.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLocalData(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching local details:', error);
      }
    };

    if (local?.id) {
      fetchLocal();
    }
  }, [local]);

  if (!localData) return <p>Loading details...</p>;

  return (
    <div className="info-panel">
      <button className="close-btn" onClick={onClose}>← Back</button>
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
  );
};

export default LocalsInfoPanel;
