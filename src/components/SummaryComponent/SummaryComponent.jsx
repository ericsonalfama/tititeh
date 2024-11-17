// src/components/SummaryComponent/SummaryComponent.js
import React from "react";

const SummaryComponent = ({ points }) => {
  const getColor = () => {
    if (points >= 75) return "green";
    if (points >= 50) return "yellow";
    return "red";
  };

  return (
    <div className="profile-results">
      <h3 className="profile-results-title">Resumo da Pontuação</h3>
      <p className="profile-results-points">Pontuação diária: {points}</p>
      <p style={{ color: getColor() }} className="profile-results-status">Status: {getColor()}</p>
    </div>
  );
};

export default SummaryComponent;
