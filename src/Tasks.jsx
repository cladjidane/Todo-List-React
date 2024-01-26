// Importation du composant Task pour l'affichage individuel de chaque tâche
import Task from "./Task";

function Tasks({ listTasksData, handleUpdate, handleDelete }) {
  // Rendu du composant Tasks
  return (
    <ul className="list-todo">
      {listTasksData.map((item, index) => (
        <Task
          key={`task-${index}`}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          item={item}
        />
      ))}
    </ul>
  );
}

export default Tasks;
