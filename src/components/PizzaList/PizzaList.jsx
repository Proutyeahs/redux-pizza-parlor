import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';



import './PizzaList.css';

function PizzaList () {
    const totalPrice = useSelector((store)=>store.total)
    const history = useHistory();
    const pizzaList = useSelector((store)=> store.pizzaMenu);
    const nextPage = () =>{
        history.push('/CustomerForm')

    }

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
        <div className="floatingTotal">TOTAL: {totalPrice}</div>
         <button 
            className='nextButton'
            onClick={nextPage}
            >Next Page</button>
        </div>
       

    )


}//end of pizza list component 

export default PizzaList