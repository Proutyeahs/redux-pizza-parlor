import './PizzaItem.css'
import {useState} from 'react';
import {useDispatch} from 'react-redux'

function PizzaItem ({pizza}) {
    const [addButton, setAddButton] = useState(true)
    const dispatch = useDispatch();

    const handleAdd = (pizza) => {
        if (addButton === true){setAddButton(false);}
        else if (addButton === false){setAddButton(true);}
        dispatch({
            type: 'ADD_PIZZA',
            payload: pizza
        })
    }

    return (
        <div className="card">
            <img src={pizza.image_path}/>
            <h4>{pizza.name}</h4>
            
            <h6>{pizza.description}</h6>
           
            <h4>{pizza.price}</h4>
            
            {addButton ? (<button onClick={() => {handleAdd({pizza})}}>Add</button>):
            (<button onClick={() => {handleAdd({pizza})}}>Remove</button>)}
            
    

        </div>
    );
}

export default PizzaItem