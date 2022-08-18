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
        for (let pizza of state){
            if (pizza === action.payload){
                state.pop(pizza);
            }
        }
    return state;
    } else { return state;}
}

const storeInstance = createStore(
    combineReducers({
        pizzaMenu,
        cart
      
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
