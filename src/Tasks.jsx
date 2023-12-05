import { useState } from 'react' 
import Task from "./Task";

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
