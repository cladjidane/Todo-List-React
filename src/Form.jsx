import Option from "./Option";
import { useState } from "react";

function Form({ listOptions }) {
  return (
    <form>
      <label htmlFor="task">Ajouter une tâche</label>
      <div className="fields">
        <input type="text" id="task" placeholder="Intitulé de la tâche" />
        ou
        <select>
          {listOptions.map((item) => {
            return <Option taskName={item.taskName} />;
          })}
        </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}
export default Form;
