// src/components/RewardsComponent/RewardsComponent.js
import React from "react";

const RewardsComponent = ({ points, rewards }) => {
  // Determina a recompensa com base na pontuação
  const getReward = () => {
    if (points >= 75) return rewards.green;
    if (points >= 50) return rewards.yellow;
    return rewards.red;
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Recompensa</h3>
      <p>
        {points >= 75 ? "Excelente trabalho!" : points >= 50 ? "Bom trabalho!" : "Continue tentando!"}
      </p>
      <p><strong>Recompensa do dia:</strong> {getReward()}</p>
    </div>
  );
};

export default RewardsComponent;
