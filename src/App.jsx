import "./App.css";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <h2>Gestionnaire de tâches</h2>

      <form>
        <label htmlFor="task">Ajouter une tâche</label>
        <div className="fields">
          <input type="text" id="task" placeholder="Intitulé de la tâche" />
          ou
          <select>
            <option value="">Choisir une tâche</option>
            <option value="Passer le balai">Passer le balai</option>
            <option value="Saluer le boss">Saluer le boss</option>
            <option value="Couper l'ordi">Couper l'ordi</option>
          </select>
        </div>

        <button type="submit">Ajouter</button>
      </form>

      <ul className="list-todo">
        <li>
          <input type="checkbox" />
          <span>Première tâche</span>
          <button>X</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>2ème tâche</span>
          <button>X</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>Saluer le boss</span>
          <button>X</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>Etc ...</span>
          <button>X</button>
        </li>
      </ul>
    </>
  );
}

export default App;
