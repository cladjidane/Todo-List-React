import { useEffect, useState } from "react";

import Option from "./Option";

function Form() {
  const [listTasksByUser, setListTasksByUser] = useState([])
  const [currentUser, setCurrentUser] = useState(1)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/todos/user/${currentUser}`)
      .then(res => res.json())
      .then(res => {
        if(!res.message) {
          setError(null)
          setListTasksByUser(res.todos)
        }
        else setError(res.message);
      });
    }, [currentUser])

  return (
    <form>
      <label htmlFor="task">Ajouter une tâche</label>
      <div className="fields">
        <input type="text" id="task" placeholder="Intitulé de la tâche" />
        ou
        <select>
          {listTasksByUser.map((item, index) => {
            return <Option key={`op-${index}`} taskName={item.todo} />;
          })}
        </select>
      </div>
      <button type="submit">Ajouter</button>

      <hr />
      {error && <>{error}</>}
      <input type="text" value={currentUser} onChange={(e)=> {setCurrentUser(e.target.value)}} /> 

    </form>
  );
}
export default Form;
