import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const cart = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_CART') {
        return []
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
      
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
