import React from 'react';
import axios from 'axios';
import './App.css';
import AdminPage from '../AdminPage/AdminPage';

import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';


function App() {

  return (
    <div className='App'>

      <Header />

      <CustomerForm />
      
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList />
  
    </div>
  );
}

export default App;
