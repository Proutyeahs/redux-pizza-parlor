import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import AdminPage from '../AdminPage/AdminPage';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList.jsx';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';
import {useDispatch} from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect (() => {
    refreshPizzas();
  }, []);

  const refreshPizzas = () => {
    axios.get('/api/pizza')
      .then(response => {
        console.log(response.data);
        dispatch({
          type: 'SET_PIZZAS',
          payload: response.data
        })
        }).catch(err => {
          console.log(err);
      })
  }

  return (
    <div className='App'>

      <Header />

      <CustomerForm />
      
      <PizzaList />
  
    </div>
  );
}

export default App;
