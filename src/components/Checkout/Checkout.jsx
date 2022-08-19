import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import CartItem from '../CartItem/CartItem.jsx';

import '@fontsource/roboto';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Checkout() {
    const useStyles = makeStyles({
        table: {
          minWidth: 80,
        },
      });
    const customer = useSelector(storeInstance => storeInstance.customerForm)
    const cart = useSelector(storeInstance => storeInstance.cart)
    const total = useSelector(storeInstance => storeInstance.total);
    const checkoutItems = useSelector(storeInstance => storeInstance.checkoutItems);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(cart);
    console.log(total);
    // const localState = [thisCart, setThisCart] = useState([])

    const entireThing = {
        customer_name: customer.name,
        street_address: customer.streetAddress,
        city: customer.city,
        zip: customer.zip,
        total: total,
        type: customer.type,
        pizzas: cart
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
                dispatch({
                    type: 'CLEAR_TOTAL',
                })
                  history.push("/")
            })
        }

        const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Pizza</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {checkoutItems.map((item) => (
            
            <TableRow key={item.id}>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.price}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <Button variant='outlined' color='primary' onClick={handleCheckout}>Checkout</Button>
        </>
    );
}

export default Checkout;

{/* <Button variant="outlined" color="primary">
        Primary
      </Button> */}