import React, { useState, useEffect } from "react";
import { MapContainer, Tilelayer, Marker, Popup, Polygon } from "react-leaflet";
import { fetchSpatialData } from "../api/sampleSpatialData";
import "leaflet/dist/leaflet.css";
import "./../styles/MapContainer.css";

import React from "react";

function MapContainer({ onFeatureSelect }) {
    return (
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        className="map-container"
      ></MapContainer>
    );
}

export default MapContainer;
