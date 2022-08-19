import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import CartItem from '../CartItem/CartItem.jsx';

function Checkout() {
    const customer = useSelector(storeInstance => storeInstance.customerForm)
    const cart = useSelector(storeInstance => storeInstance.cart)
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(cart);
    // const localState = [thisCart, setThisCart] = useState([])

    const entireThing = {
        customer_name: customer.name,
        street_address: customer.streetAddress,
        city: customer.city,
        zip: customer.zip,
        total: cart.total,
        type: customer.type,
        pizzas: cart.pizzas,
    }
    

    const handleCheckout = () => {
        // 1. Add orders to admin table in DB ("line_item")
        // 2. Return user to select pizzas page
        // 3. Clear reducers as appropriate 
        axios.post('/api/order', entireThing)
            .then(response => {
                dispatch({
                    type: 'CLEAR_CART',
                  })
                  history.push("/")
            })
        }

    return (
        <>
            <h2>Checkout</h2>
            <table>
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                        {cart.map((item) => {
                            return (
                                <CartItem key={item.id} item={item}/>
                            )
                        })}
                </tbody>
            </table>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    );
}

export default Checkout;