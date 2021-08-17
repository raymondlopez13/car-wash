import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3001/api`
  });

function PayPal(props) {
    const [success, setSuccess] = useState(false);
    const paypal = useRef()
    console.log(props.reqBody);
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
                                value: 80.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                api.post('/', props.reqBody).then(response => console.log(response)).catch(err => console.log(err));
                setSuccess(true); 
                document.location.href='/success';        
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, []);

    return (             
        <div className ='paypal' ref={paypal}></div>          
        
)}

export default PayPal;