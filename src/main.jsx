import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { TodoProvider } from './TodoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
