import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import {useSelector} from 'react-redux';


import './PizzaList.css';

function PizzaList () {

    const pizzaList = useSelector((store)=> store.pizzaMenu);


    return (
        
        <div className="cardWrapper">


       
        {pizzaList.map(pizza=>{
            return(
                <PizzaItem 
                pizza={pizza}
                key={pizza.name}
                />
            )
        })}
        </div>

    )


}//end of pizza list component 

export default PizzaList