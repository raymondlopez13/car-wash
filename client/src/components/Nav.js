import React from 'react';


function Nav() {
  return (
    <nav>
        <h1 className='Nav-heading'><a href='/'>Tony's Car Detail</a></h1>
        <ul>
          <li>
            <a href='/services'>Services</a>
          </li>
          <li>
          <a href='/about'>About</a>
          </li>
          <li>
          <a href='/contact'>Contact</a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;