import React, { useRef, useEffect } from 'react';

function PayPal() {
    const paypal = useRef()
    
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.createOrder({
                    
                })
            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal;