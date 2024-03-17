import { TodoContext } from "./TodoContext";
import { useContext } from "react";

function Task({ item }) {
  const { updateTodo, removeTodo } = useContext(TodoContext);
  return (
    <li>
      <input 
        checked={item.completed} 
        type="checkbox" 
        onChange={(e) => updateTodo(item.id, e.target.checked)} 
      />
      <span>[{item.id}] {item.todo}</span>
      {item.completed && <button onClick={() => removeTodo(item.id)}>X</button>}
    </li>
  );
}

export default Task;
