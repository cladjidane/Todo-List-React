// Importation du composant Task pour l'affichage individuel de chaque tâche
import Task from "./Task";

function Tasks({ listTasksData, handleUpdate }) {
  // Rendu du composant Tasks

  // TODO ajout d'un bouton et du gestionnaire pour afficher/masquer les tâches terminées
  
  return (
    <ul className="list-todo">
      {listTasksData.map((item, index) => (
        <Task
          key={`task-${index}`}
          handleUpdate={handleUpdate}
          item={item}
        />
      ))}
    </ul>
  );
}

export default Tasks;
