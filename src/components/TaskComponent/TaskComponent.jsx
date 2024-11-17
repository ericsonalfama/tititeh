// src/components/TaskComponent/TaskComponent.js
import React from "react";

const TaskComponent = ({ task, onComplete }) => {
  return (
    <li style={{ marginBottom: "8px" }}>
      <button
        onClick={() => onComplete(task.id)}
        style={{
          backgroundColor: task.completed ? "green" : "#f0f0f0",
          color: task.completed ? "white" : "black",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {task.name} - {task.points} pontos
      </button>
    </li>
  );
};

export default TaskComponent;
