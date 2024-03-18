import { TodoContext } from "./TodoContext";
import { useContext } from "react";
import { useState } from "react";

function Form() {
  const [taskName, setTaskName] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = () => {
    addTodo({
      todo: taskName,
      completed: false,
      userId: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Ajouter une tâche</label>
      <div className="fields">
        <input
          type="text"
          id="task"
          placeholder="Intitulé de la tâche"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}
export default Form;
