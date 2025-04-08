import React, { useEffect, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './LocalsMap.css';
import reddot from '../../assets/red dot.png';
import redpin from '../../assets/red pin.png';

const defaultCenter = {
  lat: 39.64323822800205,
  lng: -86.86339359225649,
};

const redDot = reddot;
const redPin = redpin;

const LocalsMap = ({ locals, selectedLocal, setSelectedLocal }) => {
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
      {locals.map((local) => {
        const isSelected = selectedLocal?.id === local.id;
        return (
          <Marker
            key={local.id}
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
