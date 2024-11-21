import React from "react";
import "../styles/InfoCard.css";

const InfoCard = ({ feature }) => {
  if (!feature) {
    return (
      <div className="info-card">Click on a map feature to view details.</div>
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
