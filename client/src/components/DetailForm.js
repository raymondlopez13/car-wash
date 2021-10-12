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
        <h2 className='animate__animated animate__fadeInDown'>Date: {state.date}</h2>
        <h2 className='animate__animated animate__fadeInDown animate-delay-halfS'>Time: {state.time}{Number(state.time) > 7  && Number(state.time) < 12? (
          'am'
        ):(
          'pm'
        )}</h2>
      </div>
      <form onSubmit={submit}>
        <label htmlFor='name' className='animate__animated animate__bounceInLeft animate-delay-1S'>Name: </label>
        <input type='text' name='name' id='name' required className='animate__animated animate__bounceInRight animate-delay-1S'/>
        <label htmlFor='email'  className='animate__animated animate__bounceInLeft animate-delay-1quarterS'>Email: </label>
        <input type='email' name='email' id='email' required className='animate__animated animate__bounceInRight animate-delay-1quarterS'/>
        <label htmlFor='phone'  className='animate__animated animate__bounceInLeft animate-delay-1halfS'>Phone: </label>
        <input type='text' name='phone' id='phone' required className='animate__animated animate__bounceInRight animate-delay-1halfS'/>
        <label htmlFor='address'  className='animate__animated animate__bounceInLeft animate-delay-1threequarterS'>Address: </label>
        <input type='text' name='address' id='address' required className='animate__animated animate__bounceInRight animate-delay-1threequarterS'/>
        <button type='submit' className='checkout-btn animate__animated animate__fadeInDown animate__delay-2s'>Checkout</button>
      </form>
    </div>
    
  );
}

export default DetailForm;