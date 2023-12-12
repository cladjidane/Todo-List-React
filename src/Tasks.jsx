import Task from "./Task";
import { useState } from 'react'

function Tasks({listTasksData}) {
  const [listeTasks, setListTasks] = useState(listTasksData) 

  return (
    <ul className="list-todo">
      {listeTasks.map(item => {
        return <Task taskName={item.taskName} />
      })}
    </ul>
  );
}

export default Tasks;