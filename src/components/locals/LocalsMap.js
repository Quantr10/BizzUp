import React from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import './LocalsMap.css';
import LocalsData from './LocalsData';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 39.6410,
  lng: -86.8625,
};

  const LocalsMap = ({ hoveredLocal }) => {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyBXoaJPlf8UdjzE8poYOZjBI8-zymIlL-Y',
    });
  
    if (!isLoaded) return <div>Loading map...</div>;
  
    return (
      <GoogleMap
        mapContainerClassName="map-container"
        center={{ lat: 39.6410, lng: -86.8625 }}
        zoom={16}
      >
        {LocalsData.map((local, index) => (
          <Marker
            key={index}
            position={{ lat: local.lat, lng: local.lng }}
            title={local.name}
          />
        ))}
  
        {hoveredLocal && (
          <InfoWindow
            position={{ lat: hoveredLocal.lat, lng: hoveredLocal.lng }}
          >
            <div>
              <h3>{hoveredLocal.name}</h3>
              <p>{hoveredLocal.shortDescription}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
};

export default LocalsMap;
