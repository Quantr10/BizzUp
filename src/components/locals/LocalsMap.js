import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LocalsData from './LocalsData';
import './LocalsMap.css';
import reddot from '../../assets/reddot.png'
import redpin from '../../assets/redpin.png'

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 39.6410,
  lng: -86.8625,
};

// Google Maps icons
const redDot = reddot;
const redPin = redpin;

const LocalsMap = ({ selectedLocal, setSelectedLocal }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBXoaJPlf8UdjzE8poYOZjBI8-zymIlL-Y',
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={16}
    >
      {LocalsData.map((local, index) => {
        const isSelected = selectedLocal?.name === local.name;

        return (
          <Marker
            key={index}
            position={{ lat: local.lat, lng: local.lng }}
            icon={{
              url: isSelected ? redPin : redDot,
              scaledSize: { width: 32, height: 32 },
            }}
            onClick={() => setSelectedLocal(local)}
            title={local.name}
          />
        );
      })}
    </GoogleMap>
  );
};

export default LocalsMap;
