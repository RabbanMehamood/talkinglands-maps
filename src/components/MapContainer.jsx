import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { fetchSpatialData } from "../api/sampleSpatialData";
import "leaflet/dist/leaflet.css";
import "./../styles/MapContainer.css";

function MapComponent({ onFeatureSelect }) {
  const [spatialData, setSpatialData] = useState({ points: [], polygons: [] });

  
  useEffect(() => {
    const getSpatialData = async () => {
      const data = await fetchSpatialData();
      setSpatialData(data);
      console.log(data.polygons);
    };
    getSpatialData();
  }, []); 

  const handleMarkerClick = (point) => {
    onFeatureSelect({ type: "Point", ...point });
  };

  const handlePolygonClick = (polygon) => {
    onFeatureSelect({ type: "Polygon", ...polygon });
  };

  return (
    <MapContainer
      center={[12.9716, 77.5946]} 
      zoom={12}
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
          <Popup style={{ background: "lightblue" }}>
            {point.name}
          </Popup>
        </Marker>
      ))}
      {spatialData.polygons.map((polygon) => (
        <Polygon
          key={polygon.id}
          positions={polygon.coordinates}
          pathOptions={{
            color: "green",
            fillColor: "yellow",
            fillOpacity: 0.4,
          }}
          eventHandlers={{ click: () => handlePolygonClick(polygon) }}
        />
      ))}
    </MapContainer>
  );
}

export default MapComponent;
