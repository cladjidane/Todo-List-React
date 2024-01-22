import Task from "./Task";
import { useState } from 'react'

function Tasks({listTasksData}) {
  return (
    <ul className="list-todo">
      {listTasksData.map((item, index) => {
        return (
          <Task 
            key={`task-${index}`} 
            item={item}
          />
        )
      })}
    </ul>
  );
}

export default Tasks;