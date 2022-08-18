import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const pizzaMenu = (state = [], action) => {
    if(action.type==='SET_PIZZAS'){
        return action.payload
    }
    return state;
}

const cart = (state = [], action) => {
    if(action.type==='ADD_PIZZA'){
        return [...state, action.payload];
    } else if(action.type==='REMOVE_PIZZA'){

        function isPizza(value){
            // console.log('value is',value, 'payload is',action.payload);
            return value !== action.payload  
        }
        const result = state.filter(isPizza)
        return result;
    return state;
    } 
    else if (action.type === 'CLEAR_CART') {
        return []
    }
    else { return state;}
}

const customerForm = (state = [], action) => {
  if (action.type === 'USER_INFO') {
    return [...state, action.payload]
  }
  return state;
}

const storeInstance = createStore(
    combineReducers({

        pizzaMenu,
        cart,
      customerForm  
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
