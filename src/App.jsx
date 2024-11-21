import React, { useState } from "react"; 
import MapComponent from "./components/MapContainer";
import InfoCard from "./components/UiInfoCard";
import "./App.css";


const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  return (
    <div className="app">
      <h1>Talking Lands Spatial Map</h1>
      <div className="ui-map-style">
        <InfoCard feature={selectedFeature} />
        <MapComponent onFeatureSelect={setSelectedFeature} />
      </div>
    </div>
  );
}

export default App;
