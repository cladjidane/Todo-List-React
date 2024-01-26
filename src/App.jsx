import "./App.css";

import { useEffect, useState } from "react";

import Form from './Form'
import Tasks from './Tasks'
import Title from './Title'
import { listOptionsData } from './utils/helpers';

const defaultUser = 10

function App() {
  const [listTasksData, setListTasksData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(res => setListTasksData(res.todos));
  }, [])

  return (
    <>
      <Title />
      <Form user={defaultUser} listTasksData={listTasksData} setListTasksData={setListTasksData} />
      {listTasksData.length > 0 &&  <Tasks setListTasksData={setListTasksData} listTasksData={listTasksData} />}
    </>
  );
}

export default App;
