// Importation du composant Option pour la sélection des tâches
import Option from "./Option";
// Importation du hook useState pour gérer l'état local du composant
import { useState } from "react";

function Form({preselectTasksData, setListTasksData, listTasksData}) {
  // message pour afficher des retours à l'utilisateur après des actions spécifiques
  const [message, setMessage] = useState(null);

  // taskName pour stocker le nom de la nouvelle tâche (mise à jour via le input, voir son onChange())
  const [taskName, setTaskName] = useState('')

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Important - Empêche le comportement par défaut du formulaire
    // Appel API pour ajouter une nouvelle tâche
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: taskName, // Nom de la tâche à ajouter, il s'agit de la variable d'état qui est mise à jour par le input 
        completed: false, // Par défaut, la tâche n'est pas complétée
        userId: 1, // Attribue la tâche à l'utilisateur courant (1 par défaut)
      })
    })
    .then(res => res.json())
    .then(res => {
      // Mise à jour de la liste des tâches avec la nouvelle tâche
      // "res" est en premier pour le faire apparaître tout en haut de la liste
      setListTasksData([res, ...listTasksData]);
      setMessage('Tâche ajoutée !'); // Affiche un message de confirmation
    });
  }

  return (
    <form onSubmit={handleSubmit} >
      {message && <div className="notice">{message}</div>}
      <label htmlFor="task">Ajouter une tâche</label>
      <div className="fields">
        <input 
          type="text" 
          id="task" 
          placeholder="Intitulé de la tâche" 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        ou
        {/*
          Pour gérer l'ajout via ce select vous devez : 
          - créer une nouvelle variable d'état local taskNameSelected
          - ajouter un gestionnaire d'évènement onChange(e)
          - faire un appel API avec le nom de la tâche selectionnée
          - bonus : vous pouvez éviter d'alourdir votre code en adaptant handleSubmit
        */}
        <select>
          {preselectTasksData.map((item, index) => {
            return <Option key={`op-${index}`} taskName={item.todo} />;
          })}
        </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}
export default Form;
