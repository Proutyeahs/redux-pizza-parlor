import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import CartItem from '../CartItem/CartItem.jsx';

function Checkout() {
    const customer = useSelector(storeInstance => storeInstance.customerForm)
    const cart = useSelector(storeInstance => storeInstance.cart)
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(cart);

    const entireThing = {
        customer: { //right-hand side: whatever the values in CustomerForm end up being
            customer_name: customer.name,
            street_address: streetaddress,
            city: city,
            zip: zip,
            type: type },
        cart: {                     // pizza object comes from cart reducer, which comes from NEXT click on PizzaList
            pizzas: {               // one customer, n pizzas. Looks like the server POST loops through them? server.js:36
                order_id: order_id,
                pizza_id: pizza_id,
                quantity: quantity
            }               
        }
    }

    const handleCheckout = () => {
        // 1. Add orders to admin table in DB ("line_item")
        // 2. Return user to select pizzas page
        // 3. Clear reducers as appropriate 
        axios.post('/', entireThing)
            .then(response => {
                dispatch({
                    type: 'CLEAR_CART',
                  })
                  history.push("/")
            })


        }

    


    return (
        <div>
            <h2>Checkout</h2>
            <table>
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {cart.map((cartItem) => {
                            return (
                                <CartItem key={cartItem.id} item={cartItem}/>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;