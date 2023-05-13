import logo from './logo.svg';
import './App.css';
import ComponenteA from './component/pure/componenteA';
import ListaContactos from './component/pure/ListaContactos';
import Caja from './component/pure/Caja';
import React, { useState } from 'react';
import TaskForm from './component/pure/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <TaskForm onSubmit={handleCreateTask} />

      <h2>Tareas:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
 //       <img src={logo} className="App-logo" alt="logo" />
//        {/*<ComponenteA></ComponenteA>*/}
//        {/*<ListaContactos></ListaContactos>*/}
//        <Caja></Caja>       
//      </header>
//    </div>
//  );
//}

export default App;
