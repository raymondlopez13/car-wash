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
    <form onSubmit={submit}>
        <label htmlFor='name' >Name</label>
        <input type='text' name='name' id='name' required/>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' required/>
        <label htmlFor='phone'>Phone</label>
        <input type='text' name='phone' id='phone' required/>
        <label htmlFor='address' >Address</label>
        <input type='text' name='address' id='address' required/>
        <button type='submit'>Checkout</button>
    </form>
  );
}

export default DetailForm;