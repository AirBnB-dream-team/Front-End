import React from 'react';
import './App.css';

import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <RegisterForm />
        </Route>
        <Route path='/logout'>
          <Login />
        </Route>
      </Switch>
      
     
     
    </div>
  );
}

export default App;
