import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useStoreContext } from '../utils/GlobalState';
import { CLEAR_VALS } from '../utils/actions';

const api = axios.create({
    //baseURL: `https://carwashyeah.herokuapp.com/api/`
    baseURL: `http://localhost:3001/api/`
  });

function PayPal() {
    const [ state, dispatch ] = useStoreContext();
    let price = 80.00;
    if(state.appointmentType === 'advanced') {
        price = 200.00;
    }
    const [success, setSuccess] = useState(false);
    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: 'Car detail',
                            amount: {
                                currency_code: "USD",
                                value: price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                api.post('/', state).then(response => console.log(response)).catch(err => console.log(err));
                setSuccess(true); 
                dispatch({
                    type: CLEAR_VALS
                });
                document.location.href='/success';        
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    });

    return (             
        <div className ='paypal' ref={paypal}></div>          
        
)}

export default PayPal;