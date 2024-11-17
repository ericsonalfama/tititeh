// src/App.js
import React, { useState } from "react";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import { profiles, tasks, rewards } from "./data";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Função chamada quando o tempo de carregamento termina
  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage onFinishLoading={handleFinishLoading} />
      ) : (
        <div>
          {profiles.map((profile) => (
            <ProfileComponent
              key={profile.id}
              profile={profile}
              tasks={tasks}
              rewards={rewards}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
