import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
    const cart = useSelector(storeInstance => storeInstance.cart)
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(cart);

    const handleCheckout = () => {
        // 1. Add orders to admin table in DB ("line_item")
        // 2. Return user to select pizzas page
        // 3. Clear reducers as appropriate 
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

            </table>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;