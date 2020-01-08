import React from 'react';
import './App.css';

import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import MyListings from './components/MyListingsPage';
import NewListing from './components/NewListing';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import {PrivateRoute} from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <NavBar />
      

      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={RegisterForm}/>  
        <PrivateRoute path='/my-listings/:id' component={MyListings}/>
        <PrivateRoute path='/new-listing/:id' component={NewListing}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
