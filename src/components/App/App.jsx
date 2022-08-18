import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';
import OrderItem from '../OrderItem/OrderItem'
import Checkout from '../Checkout/Checkout'


function App() {

  return (

    <Router>
      <div className='App'>
        <Header />
        
        {/* <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p> */}
        <OrderItem />
        <Route path={'/'}>
          <PizzaList />
        </Route>
        <Route path={'/form'}>
          <CustomerForm />
        </Route>
        <Route path={'/checkout'}>
          <Checkout />
        </Route>
        <Route path={'/admin'} exact>
          <AdminPage />
        </Route>
      </div>
    </Router>

  );
}

export default App;
