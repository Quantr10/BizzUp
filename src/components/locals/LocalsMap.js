import React, { useRef, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LocalsData from './LocalsData';
import './LocalsMap.css';
import reddot from '../../assets/reddot.png'
import redpin from '../../assets/redpin.png';

const defaultCenter = {
  lat: 39.64323822800205,
  lng: -86.86339359225649,
};

const redDot = reddot;
const redPin = redpin;

const LocalsMap = ({ selectedLocal, setSelectedLocal }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBXoaJPlf8UdjzE8poYOZjBI8-zymIlL-Y',
  });

  const mapRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (mapRef.current && selectedLocal) {
      mapRef.current.panTo({ lat: selectedLocal.lat, lng: selectedLocal.lng });
    }
  }, [selectedLocal]);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      center={defaultCenter}
      zoom={18}
      onLoad={onLoad}
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
