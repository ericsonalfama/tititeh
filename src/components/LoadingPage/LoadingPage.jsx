// src/components/LoadingPage/LoadingPage.js
import React, { useEffect } from "react";
import logo from "../../assets/titieh_logo.png"

const LoadingPage = ({ onFinishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(onFinishLoading, 4000); // Define 3 segundos de carregamento

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, [onFinishLoading]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <h1>Hello bienvenu!</h1>
      <img src={logo} alt="" id="logo"/>
      <p>Chargement...</p>
    </div>
  );
};

export default LoadingPage;
