import React from 'react';
import './App.css';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import MyListings from './components/MyListingsPage';
import AllListingsPage from './components/AllListingsPage';
import NewListing from './components/NewListing';
import MyReservations from './components/MyReservationsPage';
import { Route} from 'react-router-dom';
import Footer from './components/Footer';
import {PrivateRoute} from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Route path='/' component={NavBar}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={RegisterForm}/>  
        <PrivateRoute path='/my-listings/:id' component={MyListings}/>
        <PrivateRoute path='/new-listing/:id' component={NewListing}/>
        <PrivateRoute path='/all-listings/:id' component={AllListingsPage}/>
        <PrivateRoute path='/my-reservations/:id' component={MyReservations}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
