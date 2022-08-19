import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import './CustomerForm.css'

function CustomerForm() {

    const useStyles = makeStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
            borderRadius: '50%',
            width: 16,
            height: 16,
            boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
            backgroundColor: '#f5f8fa',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
            '$root.Mui-focusVisible &': {
                outline: '2px auto rgba(19,124,189,.6)',
                outlineOffset: 2,
            },
            'input:hover ~ &': {
                backgroundColor: '#ebf1f5',
            },
            'input:disabled ~ &': {
                boxShadow: 'none',
                background: 'rgba(206,217,224,.5)',
            },
        },
        checkedIcon: {
            backgroundColor: '#137cbd',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
            '&:before': {
                display: 'block',
                width: 16,
                height: 16,
                backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                content: '""',
            },
            'input:hover ~ &': {
                backgroundColor: '#106ba3',
            },
        },
    });

    // Inspired by blueprintjs
    function StyledRadio(props) {
        const classes = useStyles();

        return (
            <Radio
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
                {...props}
            />
        );
    }

    const history = useHistory()
    let dispatch = useDispatch()

    let [customer, setCustomer] = useState({ name: '', streetAddress: '', city: '', zip: '', type: '' })

    const nameChange = (event) => {
        setCustomer({
            ...customer,
            name: event.target.value
        })
    }
    const streetChange = (event) => {
        setCustomer({
            ...customer,
            streetAddress: event.target.value
        })
    }
    const cityChange = (event) => {
        setCustomer({
            ...customer,
            city: event.target.value
        })
    }
    const zipChange = (event) => {
        setCustomer({
            ...customer,
            zip: event.target.value
        })
    }
    const typeChange = (event) => {
        setCustomer({
            ...customer,
            type: event.target.value
        })
    }

    const addInfo = (event) => {
        event.preventDefault();
        console.log('this', customer)
        dispatch({
            type: 'USER_INFO',
            payload: customer
        })
        setCustomer({ name: '', streetAddress: '', city: '', zip: '', type: '' })
        history.push('/checkout')
    }

    return (
        <>
            <form className="move" onSubmit={(event) => addInfo(event)}>
                <TextField value={customer.name} onChange={nameChange} type='text' placeholder="Name" />
                <TextField value={customer.streetAddress} onChange={streetChange} type='text' placeholder="StreetAddress" />
                <TextField value={customer.city} onChange={cityChange} type='text' placeholder="City" />
                <TextField value={customer.zip} onChange={zipChange} type='text' placeholder="Zip" />
                <FormLabel>Order Type</FormLabel>
                <RadioGroup>
                    <FormControlLabel onChange={typeChange} value="Pick Up" control={<StyledRadio />} label="Pick Up" />
                    <FormControlLabel onChange={typeChange} value="Delivery" control={<StyledRadio />} label="Delivery" />
                </RadioGroup>
                <Button type="submit" variant='outlined' color='primary'>Submit</Button>
            </form>
        </>
    )
}

export default CustomerForm