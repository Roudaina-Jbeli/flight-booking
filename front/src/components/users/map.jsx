// Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ latitude, longitude, zoom }) => {
  useEffect(() => {
    // Create a map centered at the specified coordinates
    const map = L.map('map').setView([latitude, longitude], zoom);

    // Add a tile layer (you can choose different providers or custom maps)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker at the specified coordinates
    L.marker([latitude, longitude]).addTo(map);
  }, [latitude, longitude, zoom]);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map;
