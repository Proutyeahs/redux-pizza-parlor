import './PizzaItem.css'
import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { Button } from '@material-ui/core';

function PizzaItem ({pizza}) {
    const [addButton, setAddButton] = useState(true)
    const dispatch = useDispatch();

    const handleAdd = (pizza) => {
        if (addButton === true){setAddButton(false);}
        dispatch({
            type: 'ADD_PIZZA',
            payload: {id:pizza.id, quantity:1}
        })
        dispatch({
            type: 'ADD_PRICE',
            payload: pizza
        })
        dispatch({
            type: 'ADDPIZZA',
            payload: pizza
        })

    }

    const handleRemove = (pizza) => {
        if (addButton === false){setAddButton(true);}
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: {id:pizza.id, quantity:1}
        })
        dispatch({
            type: 'REMOVE_PRICE',
            payload: pizza
        })
        dispatch({
            type: 'REMOVEPIZZA',
            payload: pizza
        })

    }

    return (
        <div className="card">
            <img src={pizza.image_path}/>
            <h4>{pizza.name}</h4>
            
            <h6>{pizza.description}</h6>
           
            <h4>{pizza.price}</h4>
            
            {addButton ? (<Button onClick={() => {handleAdd(pizza)}}>Add</Button>):
            (<Button onClick={() => {handleRemove(pizza)}}>Remove</Button>)}
            
        </div>
    );
}

export default PizzaItem