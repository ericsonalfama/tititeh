// data.js

// Dados dos perfis das crianças
export const profiles = [
    {
      id: 1,
      name: "Allyssen",
      picture: require("././assets/allyssen.png"), // caminho para a imagem da Allyssen
      dailyPoints: [],
      weeklySummary: [],
      monthlySummary: [],
    },
    {
      id: 2,
      name: "Sven",
      picture: require("././assets/sven.png"), // caminho para a imagem do Sven
      dailyPoints: [],
      weeklySummary: [],
      monthlySummary: [],
    },
  ];
  
  // Tarefas diárias
  export const tasks = [
    { id: 1, name: "Apagar a luz", points: 10 , completed: false},
    { id: 2, name: "Descarga na sanita", points: 10 , completed: false },
    { id: 3, name: "Tirar a loiça da mesa", points: 15 , completed: false },
    { id: 4, name: "Cama arrumada", points: 15 , completed: false },
    { id: 5, name: "Chão do quarto limpo", points: 20 , completed: false},
    { id: 6, name: "Bureau arrumado", points: 20 , completed: false},
    { id: 7, name: "Fazer dever de casa", points: 25 , completed: false},
    { id: 8, name: "Não andar descalço na casa", points: 10 , completed: false},
    { id: 9, name: "Lavatório limpo", points: 10 , completed: false},
  ];
  
  // Regras de recompensa
  export const rewards = {
    red: "Sem tempo de tela.",
    yellow: "Acesso a 1 hora de tela.",
    green: "Acesso a 2-4 horas de tela.",
  };
  