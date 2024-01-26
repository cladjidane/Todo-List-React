import { useEffect, useState } from "react";

import Option from "./Option";

function Form({setListTasksData, listTasksData}) {
  const [listTasksByUser, setListTasksByUser] = useState([]);
  const [error, setError] = useState(null);

  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: taskName,
        completed: false,
        userId: 1,
      })
    })
    .then(res => res.json())
    .then(res => {
      let newListTasks = listTasksData
      newListTasks.push(res)

      setListTasksData(newListTasks)
    });
  }

  return (
    <form onSubmit={handleSubmit} >
      {error && <div className="notice">{error.message}</div>}
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
        <select>
          {listTasksByUser.map((item, index) => {
            return <Option key={`op-${index}`} taskName={item.todo} />;
          })}
        </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}
export default Form;
