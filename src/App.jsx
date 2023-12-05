import "./App.css";
import Title from './Title'
import Form from './Form'
import Tasks from './Tasks'

import { listTasksData, listOptionsData } from './utils/helpers';

function App() {
  return (
    <>
      <Title />
      <Form listOptions={listOptionsData} />
      <Tasks listTasksData={listTasksData}/>
    </>
  );
}

export default App;
