import { useState } from "react"
import Option from './Option'

function Form({listOptions}){
  return (
         <form>
        <label htmlFor="task">Ajouter une tâche</label>
        <div className="fields">
          <input type="text" id="task" placeholder="Intitulé de la tâche" />
          ou
          <select>
            {listOptions.map(item => {
              return <Option taskName={item.taskName} />
            })}
          </select>
        </div>
        <button type="submit">Ajouter</button>
      </form>
  )
}
export default Form