import "./App.css";

import { listOptionsData, listTasksData } from './utils/helpers';

import Form from './Form'
import Tasks from './Tasks'
import Title from './Title'

function App() {
  return (
    <>
      <Title />
      <Form listOptions={listOptionsData} />
      <Tasks listTasksData={listTasksData} />
    </>
  );
}

export default App;
