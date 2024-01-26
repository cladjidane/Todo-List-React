import "./App.css";

import { useEffect, useState } from "react";

import Form from "./Form";
import Tasks from "./Tasks";
import Title from "./Title";

function App() {
  // Liste des tâches, sera remplie par l'appel API loadTasks() via l'effet declenché au montage du composant (useEffet())
  const [listTasksData, setListTasksData] = useState([]);
  const [preselectTasksData, setPreselectTasksData] = useState([]);

  // Charger les tâches depuis l'API
  const loadTasks = () => {
    fetch("https://dummyjson.com/todos")
      .then(response => response.json())
      .then(data => {
        setListTasksData(data.todos);
        setPreselectTasksData(data.todos.filter(task => task.completed));
      })
      .catch(error => console.error("Failed to load tasks", error));
  };

  // Le hook useEffect est utilisé ici pour charger les données lors du montage du composant.
  // Le tableau de dépendances vide [] indique que cet effet ne doit s'exécuter qu'une seule fois,
  // juste après le premier rendu du composant.
  useEffect(() => {
    loadTasks();
  }, []);

  // Mettre à jour une tâche
  const handleUpdate = (idTodo, completed) => {
    fetch(`https://dummyjson.com/todos/${idTodo}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed })
    })
    .then(response => response.json())
    .then(updatedTask => {
      const updatedListTasks = listTasksData.map(task => 
        task.id === idTodo ? updatedTask : task
      );
      setListTasksData(updatedListTasks);
    })
    .catch(error => console.error("Failed to update task", error));
  };

  // Supprimer une tâche
  const handleDelete = (idTodo) => {
    fetch(`https://dummyjson.com/todos/${idTodo}`, { method: "DELETE" })
      .then(() => {
        const updatedListTasks = listTasksData.filter(task => task.id !== idTodo);
        setListTasksData(updatedListTasks);
      })
      .catch(error => console.error("Failed to delete task", error));
  };

  return (
    <>
      <Title />
      <Form
        preselectTasksData={preselectTasksData}
        listTasksData={listTasksData}
        setListTasksData={setListTasksData}
      />
      {listTasksData.length > 0 && (
        <Tasks
          listTasksData={listTasksData}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

export default App;
