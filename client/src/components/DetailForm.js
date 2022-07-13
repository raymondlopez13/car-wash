import React from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_FORM_VALS } from '../utils/actions';


function DetailForm() {
  const [ state, dispatch ] = useStoreContext();
  function submit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    dispatch({
      type: UPDATE_FORM_VALS,
      name: name,
      email: email,
      phone: phone,
      address: address
    });
  }
  return (
    <div className=''>
      <div className='appointmentDetails'>
        <h2 className=''>Date: {state.date}</h2>
        <h2 className=''>Time: {state.time}{Number(state.time) > 7  && Number(state.time) < 12? (
          'am'
        ):(
          'pm'
        )}</h2>
      </div>
      <form onSubmit={submit}>
        <label htmlFor='name' className=''>Name: </label>
        <input type='text' name='name' id='name' required className=''/>
        <label htmlFor='email'  className=''>Email: </label>
        <input type='email' name='email' id='email' required className=''/>
        <label htmlFor='phone'  className=''>Phone: </label>
        <input type='text' name='phone' id='phone' required className=''/>
        <label htmlFor='address'  className=''>Address: </label>
        <input type='text' name='address' id='address' required className=''/>
        <button type='submit' className='checkout-btn'>Checkout</button>
      </form>
    </div>
    
  );
}

export default DetailForm;