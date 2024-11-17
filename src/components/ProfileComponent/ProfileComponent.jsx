// src/components/ProfileComponent/ProfileComponent.js
import React, { useState } from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import SummaryComponent from "../SummaryComponent/SummaryComponent";
import RewardsComponent from "../RewardsComponent/RewardsComponent";

const ProfileComponent = ({ profile, tasks, rewards }) => {
  const [taskStatus, setTaskStatus] = useState(
    tasks.map((task) => ({ ...task, completed: false }))
  );

  // Função para marcar uma tarefa como concluída
  const handleTaskCompletion = (taskId) => {
    setTaskStatus((prevStatus) =>
      prevStatus.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Calcular a pontuação com base nas tarefas concluídas
  const points = taskStatus
    .filter((task) => task.completed)
    .reduce((total, task) => total + task.points, 0);

  return (
    <div className="profile">
      <img
        src={profile.picture}
        alt={`Foto de ${profile.name}`}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{profile.name}</h2>

      <ul>
        {taskStatus.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            onComplete={handleTaskCompletion}
          />
        ))}
      </ul>

      <SummaryComponent points={points} />
      <RewardsComponent points={points} rewards={rewards} />
    </div>
  );
};

export default ProfileComponent;
