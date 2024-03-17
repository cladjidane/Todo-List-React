// Importation du composant Task pour l'affichage individuel de chaque tâche
import Task from "./Task";
import { TodoContext } from "./TodoContext";
import { useContext } from "react";

function Tasks() {  
  const { todos } = useContext(TodoContext);

  // Rendu du composant Tasks
  return (
    <ul className="list-todo">
      {todos.map((item, index) => (
        <Task
          key={`task-${index}`}
          item={item}
        />
      ))}
    </ul>
  );
}

export default Tasks;
