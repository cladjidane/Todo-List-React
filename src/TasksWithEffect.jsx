import Task from "./Task";
import { TodoContext } from "./TodoContext";
import { useContext, useState, useEffect } from "react";

function TasksWithEffect() {  
  const { todos } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredTodos(todos);
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = todos.filter(item => 
        item.todo.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredTodos(filtered);
    }
  }, [todos, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="search-container" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher une tâche..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '8px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <ul className="list-todo">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((item, index) => (
            <Task
              key={`task-${index}`}
              item={item}
            />
          ))
        ) : (
          <li style={{ textAlign: 'center', padding: '10px' }}>
            Aucune tâche ne correspond à votre recherche
          </li>
        )}
      </ul>
    </div>
  );
}

export default TasksWithEffect;
