import Task from "./Task";
import { useState } from "react";

function Tasks({ listTasksData, setListTasksData }) {
  
  const handleUpdate = (idTodo, e) => {
    fetch("https://dummyjson.com/todos/" + idTodo, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: e.target.checked,
      }),
    })
      .then((res) => res.json())
      .then(res => {

        let newListTasks = listTasksData.filter(item => {
          if(item.id === idTodo) return res
          else return item
        })

        setListTasksData(newListTasks)

        // fetch('https://dummyjson.com/todos')
        // .then(res => res.json())
        // .then(res => setListTasksData(res.todos));
      });
  };

  const handleDelete = (idTodo) => {
    fetch('https://dummyjson.com/todos/' + idTodo, {
      method: 'DELETE',
    }).then(res => res.json()).then(console.log);        
  }

  return (
    <ul className="list-todo">
      {listTasksData.map((item, index) => {
        return (
          <Task 
            key={`task-${index}`}
            handleDelete={() => handleDelete(item.id)} 
            handleUpdate={(e) => handleUpdate(item.id, e)} 
            item={item} 
          />
        );
      })}
    </ul>
  );
}

export default Tasks;
