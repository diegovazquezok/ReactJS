import logo from './logo.svg';
import './App.css';
import ComponenteA from './component/pure/componenteA';
import ListaContactos from './component/pure/ListaContactos';
import Caja from './component/pure/Caja';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './component/pure/Forms/LoginForm';
import RegisterForm from './component/pure/Forms/RegisterForm';
import TaskForm from './component/pure/TaskForm';
import ChuckNorrisJokes from '../src/component/pure/ChuckNorrisJokes';

const App = () => {
  return (
    <div>
      <ChuckNorrisJokes />
    </div>
  );
};




{/*const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/tasks" /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login">
          <LoginForm onLogin={handleLogin} />
        </Route>

        <Route exact path="/register">
          <RegisterForm />
        </Route>

        <PrivateRoute exact path="/tasks" isAuthenticated={isAuthenticated}>
          <TaskForm onLogout={handleLogout} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ isAuthenticated, children, ...rest }) => (
  <Route {...rest}>
    {isAuthenticated ? (
      children
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: rest.location } }} />
    )}
  </Route>
);


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
