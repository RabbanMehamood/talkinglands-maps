import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { fetchSpatialData } from "../api/sampleSpatialData";
import "leaflet/dist/leaflet.css";
import "./../styles/MapContainer.css";

import React from "react";

function MapComponent({ onFeatureSelect }) {
    const [spatialData, setSpatialData] = useState({ points: [], polygons: [] });
    useEffect(() => {
      fetchSpatialData().then(setSpatialData);
    });
    const handleMarkerClick = (points) => {
      onFeatureSelect({ type: "points", ...points });
    };
    const handlePolygonClick = (polygon) => {
      onFeatureSelect({ type: "Polygon", ...polygon });
    };
    return (
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {spatialData.points.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            eventHandlers={{ click: () => handleMarkerClick(point) }}
          >
            <Popup>{point.name}</Popup>
          </Marker>
        ))}
        {spatialData.polygons.map((polygon) => (
          <Polygon
            key={polygon.id}
            positions={polygon.coordinates}
            eventHandlers={{ click: () => handlePolygonClick(polygon) }}
          />
        ))}
      </MapContainer>
    );
}

export default MapComponent;
