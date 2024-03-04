// Composant Task pour afficher une tâche individuelle
function Task({ item, handleUpdate }) {
  // Rendu d'un élément de liste pour une tâche
  // Inclut une case à cocher pour marquer la tâche comme complétée ou non
  // Affiche le nom de la tâche
  // La fonction handleUpdate est à retrouver dans App.jsx
  // Elle a été transmise ici par Tasks en tant que props
  return (
    <li>
      <input 
        checked={item.completed === 1 ? true : false} 
        type="checkbox" 
        onChange={(e) => handleUpdate(item.id, e.target.checked, item.todo)} 
      />
      <span>[{item.id}] {item.todo}</span>
    </li>
  );
}

export default Task;
