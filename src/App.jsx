import "./App.css";

import { useEffect, useState } from "react";

import Form from "./Form";
import Tasks from "./Tasks";
import Title from "./Title";

function App() {
  // Liste des tâches, sera remplie par l'appel API loadTasks() via l'effet declenché au montage du composant (useEffet())
  const [listTasksData, setListTasksData] = useState([]);

  // Charger les tâches depuis l'API
  const loadTasks = () => {
    // TODO fetch
    return []
  };

  // Le hook useEffect est utilisé ici pour charger les données lors du montage du composant.
  // Le tableau de dépendances vide [] indique que cet effet ne doit s'exécuter qu'une seule fois,
  // juste après le premier rendu du composant.
  useEffect(() => {
    loadTasks();
  }, []);

  // Mettre à jour une tâche
  const handleUpdate = (idTodo, completed) => {
    let formdata = new FormData();
    formdata.append("task_id", idTodo);
    formdata.append("completed", completed ? "1" : "0");

    fetch(`http://ds-react-2024.server/api/task/edit`, {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        // TODO
      })
      .catch((error) => console.error("Failed to update task", error));
  };

  return (
    <>
      <Title />
      <Form
        listTasksData={listTasksData}
        setListTasksData={setListTasksData}
      />
      {listTasksData.length > 0 && (
        <Tasks listTasksData={listTasksData} handleUpdate={handleUpdate} />
      )}
    </>
  );
}

export default App;
