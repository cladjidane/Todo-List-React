import "./App.css";

import Form from "./Form";
import Tasks from "./Tasks";
import Title from "./Title";
import { TodoContext } from "./TodoContext";
import { useContext } from "react";

function App() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <Title />
      <Form />

      {todos.length > 0 && (
        <Tasks />
      )}
    </>
  );
}

export default App;


