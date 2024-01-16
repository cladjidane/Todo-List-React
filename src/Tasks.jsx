import Task from "./Task";
import { useState } from 'react'

function Tasks({listTasksData}) {
  return (
    <ul className="list-todo">
      {listTasksData.map(item => {
        return <Task taskName={item.taskName} />
      })}
    </ul>
  );
}

export default Tasks;