import React, { useState } from 'react';
import axios from 'axios';


function Booking() {
    let urlParams = window.location.search;
    let time = urlParams.split('&')[0].split('=')[1];
    time = time.replace('am', '');
    time = time.replace('pm', '');
    let date = urlParams.split('&')[1].split('=')[1];

    function formSubmit() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const reqBody = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: Number(time)
        }
        console.log(reqBody);
    }

    const [checkout, setCheckout] = useState(false);
    
  return (
      <div>
          {checkout ? (
              <PayPal />
          ) :(
                <form className='Booking-form'>
                    <label htmlFor='Name'>Name:</label>
                    <input name='Name' type='text' id='name'/>
                    <label htmlFor='Email'>Email:</label>
                    <input name='Email' type='email' id='email'/>
                    <label htmlFor='Phone'>Phone:</label>
                    <input name='Phone' type='phone' id='phone'/>
                    <button type='button' onClick={formSubmit}>Checkout</button>
                </form>
          )}
      </div>
        
  );
}

export default Booking;