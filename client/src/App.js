import './App.css';
import React from 'react';
import Home from './component/Home';
import Customer from './component/Customer';
import CustomerId from './component/CustomerId';
import Manager from './component/Manager';
import Waiter from './component/Waiter';
import Chef from './component/Chef';
import Cashier from './component/Cashier';
import RestaurantId from './component/RestaurantId'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
          <Routes>
            <Route path="/" element = {<Home/>} />
             <Route path="/customer" element = {<Customer/>} />
            <Route path="/customer/:customer_id/" element = {<CustomerId/>} />
            <Route path="/customer/:customer_id/:restaurant_id" element = {<RestaurantId/>} />
            <Route path="/manager" element = {<Manager/>} />
            <Route path="/waiter" element = {<Waiter/>} />
            <Route path="/chef" element = {<Chef/>} />
            <Route path="/cashier" element = {<Cashier/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
