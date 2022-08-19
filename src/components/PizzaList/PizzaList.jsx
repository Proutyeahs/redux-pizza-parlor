import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Button from '@material-ui/core/Button';


import './PizzaList.css';

function PizzaList () {
    const totalPrice = useSelector((store)=>store.total)
    const history = useHistory();
    const pizzaList = useSelector((store)=> store.pizzaMenu);
    const nextPage = () =>{
        history.push('/form')

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
         <Button 
            className='nextButton'
            onClick={nextPage}
            >Next Page</Button>
        
        <div className="floatingTotal">TOTAL: {totalPrice}
        <br></br>
        <Button 
            sx={{height: 40}}
            variant='outlined'
            color='primary'
            onClick={nextPage}
            >Next Page</Button>
        </div>
        
            
        </div>
       

    )


}//end of pizza list component 


export default PizzaList