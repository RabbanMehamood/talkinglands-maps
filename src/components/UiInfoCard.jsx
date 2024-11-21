import React from "react";
import "../styles/InfoCard.css";

const InfoCard = ({ feature }) => {
  if (!feature) {
    return (
      <div className="info-card">
        <h3>
          <p>1.Click on the markers in the map to view point details.</p>
          <p>2.Click on Polygon area to see polygon details.</p>
        </h3>
      </div>
    );
  }

  return (
    <div className="info-card">
      <h3>{feature.type} Details</h3>
      <p>
        <strong>Location Name:</strong> {feature.name}
      </p>
      {feature.type === "Point" && (
        <>
          <p>
            <strong>Latitude:</strong> {feature.lat}
          </p>
          <p>
            <strong>Longitude:</strong> {feature.lng}
          </p>
        </>
      )}
      {feature.type === "Polygon" && (
        <p>
          <strong>Coordinates:</strong>{" "}
          {JSON.stringify(feature.coordinates, null, 2)}
        </p>
      )}
    </div>
  );
};

export default InfoCard;
