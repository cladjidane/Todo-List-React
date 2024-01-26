// Composant Task pour afficher une tâche individuelle
function Task({ item, handleUpdate, handleDelete }) {
  // Rendu d'un élément de liste pour une tâche
  // Inclut une case à cocher pour marquer la tâche comme complétée ou non
  // Affiche le nom de la tâche et un bouton de suppression si la tâche est complétée
  // Les fonctions handleUpdate et handleDelete sont à retrouver dans App.jsx
  // Ils ons été transmises ici par Tasks en tant que props
  return (
    <li>
      <input 
        checked={item.completed} 
        type="checkbox" 
        onChange={(e) => handleUpdate(item.id, e.target.checked)} 
      />
      <span>[{item.id}] {item.todo}</span>
      {item.completed && <button onClick={() => handleDelete(item.id)}>X</button>}
    </li>
  );
}

export default Task;
